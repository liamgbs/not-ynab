import './accounts-header.scss';
import React from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../../reducers';
import { getAllAccounts } from '../../../utils/helpers';

const AccountsHeader: React.FC<ReturnType<typeof mapStateToProps>> = (props) => {
	return (
		<div className="accounts-header">
			<div className="accounts-header-name">
				{props.account.accountName}
			</div>
			<div className="balance">
				{props.account.balance}
			</div>
		</div>
	)
}

function mapStateToProps(state: RootState) {
	return {
		account: state.accounts.activeAccount === -1
			? getAllAccounts(state.accounts.accounts)
			: state.accounts.accounts[state.accounts.activeAccount],
	}
}

export default connect(mapStateToProps)(AccountsHeader)
