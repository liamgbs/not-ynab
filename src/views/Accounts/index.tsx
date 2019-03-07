import './accounts.scss';
import React, { PureComponent } from 'react';
import AccountsHeader from './AccountsHeader';
import AccountsContent from './AccountsContent';

export default class Accounts extends PureComponent {
	render() {
		return (
			<div className="accounts">
				<AccountsHeader />
				<AccountsContent />
			</div>
		)
	}
}
