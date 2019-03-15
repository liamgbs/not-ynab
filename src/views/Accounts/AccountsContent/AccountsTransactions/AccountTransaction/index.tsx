import './accounts-transaction.scss';

import React, { PureComponent, ChangeEvent, RefObject, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import classNames from 'classnames';

import { Transaction } from '../../../../../types/transactions';
import Input from '../../../../../components/Input';
import Dropdown from '../../../../../components/Dropdown';
import Button from '../../../../../components/Button';
import { cancelNewTransactionAction } from '../../../../../actions/transactions';
import { min } from 'moment';
import { RootState } from '../../../../../reducers';
import { Account, Payee } from '../../../../../types/accounts';
import { Category } from '../../../../../types/categories';

interface Props {
	transaction: Transaction
	new?: boolean,
	accounts: Account[],
	categories: Category[],
	payees: Payee[]
}

interface Actions {
	saveEditedTransaction: () => void,
	addNewTransaction: () => void,
	cancelNewTransaction: () => void
}

class AccountsTransaction extends PureComponent<Props & Actions> {
	wrapperRef: HTMLDivElement | undefined
	state = {
		editing: !!this.props.new,
		transaction: { ...this.props.transaction }
	};
	// componentWillReceiveProps(props: Props) {
	// 	this.setState({
	// 		transaction: {...props.transaction}
	// 	})
	// }
	handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
		console.log(event.target.name);
		
		this.setState({
			transaction: {
				...this.state.transaction,
				[event.target.name]: event.target.value
			}
		})

	}
	render() {
		if (this.state.editing) {
			return this.renderEditing();
		} else {
			return this.renderStatic();
		}
	}
	renderStatic() {
		const { transaction } = this.state;
		return (
			<div onClick={this.onClick.bind(this)} className="accounts-transaction">
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

	setWrapperRef(node : HTMLDivElement) {
		this.wrapperRef = node;
	}

	onClick() {
		if (!this.state.editing) {
			this.setState({
				editing: true
			})
		}
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
			transaction: {...this.props.transaction}
		})
	}


	renderEditing() {
		const { transaction } = this.state;
		return (
			<div ref={this.setWrapperRef.bind(this)} className="accounts-transaction">
				<div className="transaction-account">
					<Dropdown
						name="accountName"
						value={transaction.accountName}
						onChange={this.handleChange.bind(this)}
						options={this.props.accounts.slice(1).map(acc => acc.accountName)} />
				</div>
				<div className="transaction-date">
					<Input // TODO: make these into dropdowns and datepickers etc.
						name="date"
						value={transaction.date}
						onChange={this.handleChange.bind(this)} />
				</div>
				<div className="transaction-payee">
					<Dropdown
						name="payeeName"
						value={transaction.payeeName}
						onChange={this.handleChange.bind(this)}
						options={this.props.payees.filter(payee=> !payee.deleted).map(payee => payee.payeeName)} />
				</div>
				<div className="transaction-category">
					<Dropdown
						name="categoryName"
						value={transaction.categoryName}
						onChange={this.handleChange.bind(this)}
						options={this.props.categories.map(cat => cat.categoryName)}/>
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
				<Button>Save</Button>
			</div>
		)
	}
}

function mapPropsToDispatch(dispatch: Dispatch) {
	return {
		saveEditedTransaction: () => { },
		addNewTransaction: () => { },
		cancelNewTransaction: () => dispatch(cancelNewTransactionAction())
	}
}

function mapStateToProps(state: RootState) {
	return {
		accounts: state.accounts.accounts,
		categories: state.budget.months[0].categories,
		payees: state.payees.payees
	}
}

export default connect(mapStateToProps, mapPropsToDispatch)(AccountsTransaction);
