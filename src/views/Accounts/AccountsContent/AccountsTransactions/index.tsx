import './accounts-transactions.scss';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../../reducers';
import { Transaction } from '../../../../types/transactions';
import AccountTransaction from './AccountTransaction';
import { Account } from '../../../../types/accounts';

import moment from 'moment';

interface Props {
	activeAccount: Account,
	newTransaction : boolean,
	transactions : Transaction[]
}

class AccountsTransactions extends PureComponent<Props> {
	render() {
		const {activeAccount, transactions, newTransaction} = this.props;
		return (
			<div className="accounts-transactions">
				<div className="accounts-transactions-header">
					<div>ACCOUNT</div>
					<div>DATE</div>
					<div>PAYEE</div>
					<div>CATEGORY</div>
					<div>INFLOW</div>
					<div>OUTFLOW</div>
				</div>
				{newTransaction ? <AccountTransaction new transaction={{
					id: "123456",
					accountName: activeAccount.accountName,
					payeeName: "No one",
					categoryName: "To Be Budgeted",
					date: moment().format("DD-MM-YYYY"),
					amount: 0,
					approved: false,
					deleted: false
				}} /> : null}

				{transactions.map(trans => {
					return trans.accountName === activeAccount.accountName
							||
						   activeAccount.accountName === "All Accounts" ? 
						<AccountTransaction transaction={trans} /> : null
				})}
			</div>
		)
	}
}

function mapStateToProps(state: RootState) {
	return {
		activeAccount: state.accounts.accounts[state.accounts.activeAccount],
		newTransaction: state.transactions.newTransaction,
		transactions: state.transactions.transactions
	}
}

export default connect(mapStateToProps)(AccountsTransactions)