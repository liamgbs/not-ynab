import './accounts-transactions.scss';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../../reducers';
import { Transaction } from '../../../../types/transactions';
import AccountTransaction from './AccountTransaction';
import { Account } from '../../../../types/accounts';

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
				{newTransaction ? "New Transaction" : null}

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