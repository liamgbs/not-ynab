import './accounts-header.scss';
import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../../reducers';
import { Account } from '../../../types/accounts';

interface Props {
	account: Account,
}

class AccountsHeader extends PureComponent<Props> {
	render() {
		return (
			<div className="accounts-header">
				<div className="accounts-header-name">
					{this.props.account.accountName}
				</div>
				<div className="balance">
					{this.props.account.balance}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state: RootState) {
	return {
		account: state.accounts.accounts[state.accounts.activeAccount],
	}
}

export default connect(mapStateToProps)(AccountsHeader)
