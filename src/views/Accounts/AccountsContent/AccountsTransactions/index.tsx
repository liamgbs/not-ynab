import './accounts-transactions.scss';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../../reducers';
import { Transaction } from '../../../../types/transactions';

interface Props {
	newTransaction : boolean,
	transactions : Transaction[]
}

class AccountsTransactions extends PureComponent<Props> {
	render() {
		return (
			<div className="accounts-transactions">
				{this.props.newTransaction ? "New Transaction" : null}
				{this.props.transactions.map(trans => {
					return trans.accountName
				})}
			</div>
		)
	}
}

function mapStateToProps(state: RootState) {
	return {
		newTransaction: state.transactions.newTransaction,
		transactions: state.transactions.transactions
	}
}

export default connect(mapStateToProps)(AccountsTransactions)