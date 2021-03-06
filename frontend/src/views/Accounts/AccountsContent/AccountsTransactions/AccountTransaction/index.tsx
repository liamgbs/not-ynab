import './accounts-transaction.scss';

import React, { PureComponent, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import classNames from 'classnames';
import DatePicker from 'react-datepicker';
import { Transaction } from '../../../../../types/transactions';
import Input from '../../../../../components/Input';
import Dropdown from '../../../../../components/Dropdown';
import Button from '../../../../../components/Button';
import { cancelNewTransactionAction, addTransactionAction, saveEditedTransactionAction, selectTransactionAction, unselectTransactionAction } from '../../../../../actions/transactions';
import { RootState } from '../../../../../reducers';
import '../../../../../../node_modules/react-datepicker/src/stylesheets/datepicker.scss'
import moment from 'moment'

interface Props extends ReturnType<typeof mapStateToProps> {
	transaction: Transaction
	new?: boolean
	selected?: boolean
}

interface Actions extends ReturnType<typeof mapDispatchToProps> {}

class AccountsTransaction extends PureComponent<Props & Actions> {
	wrapperRef: HTMLDivElement | null = null;
	state = {
		editing: !!this.props.new,
		selected: this.props.new || !!this.props.selected,
		transaction: { ...this.props.transaction }
	};
	componentWillReceiveProps(props: Props) {
		this.setState({
			transaction: { ...props.transaction },
			selected: !!props.selected
		});
	}
	handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
		this.setState({
			transaction: {
				...this.state.transaction,
				[event.target.name]: event.target.value
			}
		});

	}
	renderStatic() {
		const { transaction, selected } = this.state;
		const CSSClasses = classNames({
			"accounts-transaction": true,
			"selected": !!selected
		})
		return (
			<div onClick={this.onClick.bind(this)} onDoubleClick={this.onDoubleClick.bind(this)} className={CSSClasses}>
				<div className="transaction-account">
					{transaction.accountName}
				</div>
				<div className="transaction-date">
					{transaction.date}
				</div>
				<div className="transaction-payee">
					{transaction.payeeName}
				</div>
				<div className="transaction-category">
					{transaction.categoryName}
				</div>
				<div className="transaction-inflow">
					{transaction.inflow}
				</div>
				<div className="transaction-outflow">
					{transaction.outflow}
				</div>
			</div>
		)
	}
	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside.bind(this));
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside.bind(this));
	}

	onDoubleClick() {
		if (!this.state.editing) {
			this.setState({
				editing: true
			})
		}
	}

	onClick() {
		if (this.state.selected) {
			this.props.unselectTransaction(this.state.transaction.id)
		} else {
			this.props.selectTransaction(this.state.transaction.id)
		}

		this.setState({
			selected: !this.state.selected
		})
	}

	handleClickOutside(event: Event | any) {
		if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
			this.onCancel();
		}
	}

	onCancel() {
		if (this.props.new) {
			return this.props.cancelNewTransaction();
		}

		this.setState({
			editing: false,
			transaction: { ...this.props.transaction }
		})
	}

	onSave() {
		const accountID = this.props.accounts.find(a => a.accountName === this.state.transaction.accountName)!.id
		if (this.props.new) {
			this.props.addNewTransaction(this.state.transaction, accountID)
		} else {
			this.props.saveEditedTransaction(this.state.transaction, accountID)
		}

		this.onCancel();
	}

	onDateChange = (date: Date) => {
		this.setState({
			transaction: {
				...this.state.transaction,
				date: moment(date).format("DD/MM/YYYY")
			}
		})
	}

	renderEditing() {
		const { transaction } = this.state;
		return (
			<div ref={r => this.wrapperRef = r} className="accounts-transaction">
				<div className="transaction-account">
					<Dropdown
						name="accountName"
						value={transaction.accountName}
						onChange={this.handleChange.bind(this)}
						options={this.props.accounts.map(acc => acc.accountName)} />
				</div>
				<div className="transaction-date">
					<DatePicker
						name="date"
						dateFormat="DD/MM/YYYY"
						selected={new Date(moment(this.state.transaction.date, "DD/MM/YYYY").format())}
						className="input"
						value={transaction.date}
						onChange={this.onDateChange} />
				</div>
				<div className="transaction-payee">
					<Dropdown
						name="payeeName"
						value={transaction.payeeName}
						onChange={this.handleChange.bind(this)}
						options={this.props.payees.filter(payee => !payee.deleted).map(payee => payee.payeeName)} />
				</div>
				<div className="transaction-category">
					<Dropdown
						name="categoryName"
						value={transaction.categoryName}
						onChange={this.handleChange.bind(this)}
						options={this.props.categories.map(cat => cat.categoryName).concat(["To Be Budgeted"])} />
				</div>
				<div className="transaction-inflow">
					<Input
						name="inflow"
						value={transaction.inflow.toString()}
						onChange={this.handleChange.bind(this)} />
				</div>
				<div className="transaction-outflow">
					<Input
						name="outflow"
						value={transaction.outflow.toString()}
						onChange={this.handleChange.bind(this)} />
				</div>
				<Button onClick={this.onCancel.bind(this)}>Cancel</Button>
				<Button onClick={this.onSave.bind(this)}>Save</Button>
			</div>
		)
	}
	render() {
		if (this.state.editing) {
			return this.renderEditing();
		} else {
			return this.renderStatic();
		}
	}
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		addNewTransaction: (transaction: Transaction, accountID: string) => dispatch(addTransactionAction(transaction, accountID)),
		saveEditedTransaction: (transaction: Transaction, accountID: string) => dispatch(saveEditedTransactionAction(transaction, accountID)),
		cancelNewTransaction: () => dispatch(cancelNewTransactionAction()),
		selectTransaction: (transactionID: string) => dispatch(selectTransactionAction(transactionID)),
		unselectTransaction: (transactionID: string) => dispatch(unselectTransactionAction(transactionID)),
	}
}

function mapStateToProps(state: RootState) {
	return {
		accounts: state.accounts.accounts,
		categories: state.budget.months[0].categories,
		payees: state.payees.payees
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsTransaction);
