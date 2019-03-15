import './account-picker.scss';
import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../../reducers';
import { Account } from '../../../types/accounts';

interface Props {
	accounts: Account[]
}

class AccountPicker extends PureComponent<Props> {
	render() {
		const { accounts } = this.props;

		return (
			<div className="account-picker">
				<div className="account-picker-header">
					BUDGET
				</div>
				<div className="account-picker-accounts">
					{accounts.filter(account => account.onBudget).map(account => {
						return (
							<div key={account.accountName} className="account-picker-account">
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

export default connect(mapStateToProps)(AccountPicker)
