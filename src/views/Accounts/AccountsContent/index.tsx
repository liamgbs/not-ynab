import './accounts-content.scss';
import React from 'react'

import Button from '../../../components/Button';
import AccountsTransactions from './AccountsTransactions';
import { Dispatch } from 'redux';
import { triggerNewTransactionAction, deleteTransactionAction } from '../../../actions/transactions';
import { connect } from 'react-redux';

interface Props {

}

interface Actions {
	triggerNewTransaction: () => void,
	deleteTransaction: () => void
}

const AccountsContent: React.FC<Props & Actions> = (props) => {
	return (
		<div className="accounts-content">
			<div className="accounts-toolbar">
				<Button
					small
					onClick={props.triggerNewTransaction}>
					Add Transaction
				</Button>

				<Button
					small
					onClick={props.deleteTransaction}>Delete</Button>
			</div>

			<AccountsTransactions />
		</div>
	)
}



function mapDispatchToProps(dispatch: Dispatch) {
	return {
		triggerNewTransaction: () => dispatch(triggerNewTransactionAction()),
		deleteTransaction: () => dispatch(deleteTransactionAction())
	}
}

export default connect(null, mapDispatchToProps)(AccountsContent);