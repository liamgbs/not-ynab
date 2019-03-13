import './accounts-content.scss';
import React, { PureComponent } from 'react'

import Button from '../../../components/Button';
import AccountsTransactions from './AccountsTransactions';
import { RootState } from '../../../reducers';
import { Dispatch } from 'redux';
import { triggerNewTransactionAction } from '../../../actions/transactions';
import { connect } from 'react-redux';

interface Props {

}

interface Actions {
	triggerNewTransaction: () => void,
}

class AccountsContent extends PureComponent<Props & Actions> {
  render() {
	return (
	  <div className="accounts-content">
		<div className="accounts-toolbar">
			<Button
				small
				onClick={this.props.triggerNewTransaction}>
			Add Transaction</Button>
		</div>

		<AccountsTransactions />
	  </div>
	)
  }
}

function mapStateToProps(state: RootState) {

}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		triggerNewTransaction: () => {
			dispatch(triggerNewTransactionAction())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsContent);