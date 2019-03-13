import './accounts-transaction.scss';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Transaction } from '../../../../../types/transactions';
import { Dispatch } from 'redux';

interface Props {
	transaction: Transaction
	isNew?: boolean,
}

interface Actions {
	saveTransaction: () => void
}

class AccountsTransaction extends PureComponent<Props> {
	render() {
		const { transaction } = this.props;
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
					{transaction.amount}
				</div>
				
			</div>
		)
	}
}

function mapPropsToDispatch(dispatch: Dispatch) {
	return {
		saveTransaction: () => {}
	}
}

export default connect(null, mapPropsToDispatch)(AccountsTransaction);
