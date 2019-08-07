import './account-picker.scss';
import React from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../../reducers';
import { Dispatch } from 'redux';
import { setActiveAccountAction } from '../../../actions/accounts';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface Props extends ReturnType<typeof mapStateToProps> { }
interface Actions extends ReturnType<typeof mapDispatchToProps> { }

const AccountPicker: React.FC<Props & Actions> = ({ accounts, activeAccount, ...props }) => {
	const setAccount = (accountIndex: number) => {
		props.setActiveAccount(accountIndex);
	}

	return (
		<div className="account-picker">
			<div className="account-picker-header">
				BUDGET
			</div>
			<div className="account-picker-accounts">
				{accounts.filter(account => account.onBudget).map((account, i) => (
					<Link to={`/app/accounts/${account.id}`}>
						<div
							onClick={() => setAccount(i)}
							key={account.accountName}
							className={classNames({
								"account-picker-account": true,
								"active": activeAccount === i
							})}>
							<span>{account.accountName}</span>
							<span>{account.balance}</span>
						</div>
					</Link>
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
	}
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		setActiveAccount: (accountIndex: number) => dispatch(setActiveAccountAction(accountIndex)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPicker)
