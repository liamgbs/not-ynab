import './accounts.scss';
import React from 'react';
import AccountsHeader from './AccountsHeader';
import AccountsContent from './AccountsContent';

const Accounts: React.FC<{}> = () => {
	return (
		<div className="accounts">
			<AccountsHeader />
			<AccountsContent />
		</div>
	)
}

export default Accounts;