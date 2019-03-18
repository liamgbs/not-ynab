import './account-picker.scss';
import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../../reducers';
import { Account } from '../../../types/accounts';
import { Dispatch } from 'redux';
import { setActiveAccountAction } from '../../../actions/accounts';

interface Props {
	accounts: Account[]
}

interface Actions {
	setActiveAccount: (accountIndex: number) => void
}

class AccountPicker extends PureComponent<Props & Actions> {
	render() {
		const { accounts } = this.props;

		return (
			<div className="account-picker">
				<div className="account-picker-header">
					BUDGET
				</div>
				<div className="account-picker-accounts">
					{accounts.filter(account => account.onBudget).map((account, i) => {
						return (
							<div onClick={() => this.props.setActiveAccount(i)} key={account.accountName} className="account-picker-account">
								<span>{account.accountName}</span>
								<span>{account.balance}</span>
							</div>
						)})
					}
					
				</div>
			</div>
		)
	}
}

function mapStateToProps(state: RootState) {
	return {
		accounts: state.accounts.accounts
	}
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		setActiveAccount: (accountIndex: number) => dispatch(setActiveAccountAction(accountIndex))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPicker)
