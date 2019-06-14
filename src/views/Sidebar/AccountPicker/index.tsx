import './account-picker.scss';
import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../../reducers';
import { Account } from '../../../types/accounts';
import { Dispatch } from 'redux';
import { setActiveAccountAction } from '../../../actions/accounts';
import { AppView } from '../../../types/app';
import { changeViewAction } from '../../../actions/app';
import classNames from 'classnames';

interface Props {
	accounts: Account[],
	activeAccount: number,
	view: AppView
}

interface Actions {
	setActiveAccount: (accountIndex: number) => void,
	setAppView: (view: AppView) => void,
}

const AccountPicker: React.FC<Props & Actions> = ({accounts, activeAccount, view, ...props}) => {
	const setAccount = (accountIndex: number) => {
		props.setActiveAccount(accountIndex);
		props.setAppView(AppView.Accounts);
	}

	return (
		<div className="account-picker">
			<div className="account-picker-header">
				BUDGET
			</div>
			<div className="account-picker-accounts">
				{accounts.filter(account => account.onBudget).map((account, i) => (
						<div
							onClick={() => setAccount(i)}
							key={account.accountName}
							className={classNames({
								"account-picker-account": true,
								"active": activeAccount === i && view === AppView.Accounts
							})}>
								<span>{account.accountName}</span>
								<span>{account.balance}</span>
						</div>
					))
				}
				
			</div>
		</div>
	)
}

function mapStateToProps(state: RootState) {
	return {
		accounts: state.accounts.accounts,
		activeAccount: state.accounts.activeAccount,
		view: state.app.view
	}
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		setActiveAccount: (accountIndex: number) => dispatch(setActiveAccountAction(accountIndex)),
		setAppView: (view: AppView) => dispatch(changeViewAction(view))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPicker)
