import './accounts-transactions.scss';
import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../../reducers';
import { Transaction } from '../../../../types/transactions';
import AccountTransaction from './AccountTransaction';
import { Account } from '../../../../types/accounts';

import moment from 'moment';
import { getAllAccounts } from '../../../../utils/helpers';

interface Props {
	activeAccount: Account,
	newTransaction: boolean,
	transactions: Transaction[],
	selectedTransactions: string[]
}

const AccountsTransactions: React.FC<Props> = (props) => {
	const { activeAccount, transactions, newTransaction, selectedTransactions } = props;
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
			{newTransaction ? <AccountTransaction new transaction={{ // TODO: make new transaction fields hold exisiting values
				id: "123456",
				accountName: activeAccount.accountName,
				payeeName: "No one",
				categoryName: "To Be Budgeted",
				date: moment().format("DD/MM/YYYY"),
				inflow: 0,
				outflow: 0,
				approved: false,
				deleted: false
			}} /> : null}

			{transactions.map(trans => {
				if (!trans.deleted && (trans.accountName === activeAccount.accountName || activeAccount.accountName === "All Accounts")) {
					return (
						<AccountTransaction
							selected={selectedTransactions.includes(trans.id)}
							key={trans.id}
							transaction={trans} />
					)
				}

			})}
		</div>
	)
}

function mapStateToProps(state: RootState) {
	return {
		activeAccount: state.accounts.activeAccount === -1 ? getAllAccounts(state.accounts.accounts) : state.accounts.accounts[state.accounts.activeAccount],
		newTransaction: state.transactions.newTransaction,
		transactions: state.transactions.transactions,
		selectedTransactions: state.transactions.selectedTransactions
	}
}

export default connect(mapStateToProps)(AccountsTransactions)