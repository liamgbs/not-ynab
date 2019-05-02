import './accounts-header.scss';
import React from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../../reducers';
import { Account } from '../../../types/accounts';
import { getAllAccounts } from '../../../utils/helpers';

interface Props {
	account: Account,
}

const AccountsHeader: React.FC<Props> = (props) => {
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
