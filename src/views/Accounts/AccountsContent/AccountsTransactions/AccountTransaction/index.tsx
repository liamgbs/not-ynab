import './accounts-transaction.scss';

import React, { PureComponent, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Transaction } from '../../../../../types/transactions';
import { Dispatch } from 'redux';
import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';
import { cancelNewTransactionAction } from '../../../../../actions/transactions';

interface Props {
	transaction: Transaction
	new?: boolean,
}

interface Actions {
	saveEditedTransaction: () => void,
	addNewTransaction: () => void,
	cancelNewTransaction: () => void
}

class AccountsTransaction extends PureComponent<Props & Actions> {
	state = {
		editing: !!this.props.new,
		transaction: { ...this.props.transaction }
	};
	// componentWillReceiveProps(props: Props) {
	// 	this.setState({
	// 		transaction: {...props.transaction}
	// 	})
	// }
	handleChange(event: ChangeEvent<HTMLInputElement>) {
		this.setState({
			transaction: {
				...this.state.transaction,
				[event.target.name]: event.target.value
			}
		})

	}
	render() {
		console.log(this.state);

		if (this.state.editing) {
			return this.renderEditing();
		} else {
			return this.renderStatic();
		}
	}
	renderStatic() {
		const { transaction } = this.state;
		return (
			<div className="accounts-transaction">
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
				<div className="transaction-outflow">
					{transaction.amount}
				</div>
				<div className="transaction-inflow">
					{transaction.amount /*TODO: properly calculate inflow and outflow, or in necessary change transaction to have these */}
				</div>
			</div>
		)
	}

	renderEditing() {
		const { transaction } = this.state;
		return (
			<div className="accounts-transaction">
				<div className="transaction-account">
					<Input
						name="accountName"
						value={transaction.accountName}
						onChange={this.handleChange.bind(this)} />
				</div>
				<div className="transaction-date">
					<Input // TODO: make these into dropdowns and datepickers etc.
						name="date"
						value={transaction.date}
						onChange={this.handleChange.bind(this)} />
				</div>
				<div className="transaction-payee">
					<Input
						name="payeeName"
						value={transaction.payeeName}
						onChange={this.handleChange.bind(this)} />
				</div>
				<div className="transaction-category">
					<Input
						name="categoryName"
						value={transaction.categoryName}
						onChange={this.handleChange.bind(this)} />
				</div>
				<div className="transaction-category">
					<Input
						name="amount"
						value={transaction.amount.toString()}
						onChange={this.handleChange.bind(this)} />
				</div>
				<div className="transaction-category">
					<Input
						name="amount"
						value={transaction.amount.toString()}
						onChange={this.handleChange.bind(this)} />
				</div>
				<Button onClick={this.props.cancelNewTransaction}>Cancel</Button>
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

export default connect(null, mapPropsToDispatch)(AccountsTransaction);
