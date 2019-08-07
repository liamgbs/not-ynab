import React from 'react';
import ViewControl from './ViewControl';

import './sidebar.scss';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { Dispatch } from 'redux';
import AccountPicker from './AccountPicker';
import Button from '../../components/Button';
import { setActiveAccountAction } from '../../actions/accounts';
import TriggeredModal from '../../components/TriggeredModal';
import NewAccountForm from '../../forms/NewAccountForm';
import { Link } from 'react-router-dom';

interface Props {}
interface Actions extends ReturnType<typeof mapDispatchToProps> { }

const Sidebar: React.FC<Props & Actions> = () => {
	return (
		<div className="sidebar">
			<div className="name">Liam</div>
			<div className="view-controls">
				<Link to="/app/budget">
					<ViewControl
						active={window.location.pathname.includes("budget")}
						icon="B"
						label="Budget" />
				</Link>
				<Link to="/app/reports">
					<ViewControl
						active={window.location.pathname.includes("reports")}
						icon="R"
						label="Reports" />
				</Link>
				<Link style={{}} to="/app/accounts">
					<ViewControl
						active={window.location.pathname.includes("accounts")}
						icon="A"
						label="Accounts" />
				</Link>
			</div>
			<AccountPicker />
			<div className="add-account-button">
				<TriggeredModal
					trigger={<Button filled small>Add Account</Button>}>
					<NewAccountForm />
				</TriggeredModal>
			</div>
		</div>
	)
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		setActiveAccount: (accountIndex: number) => dispatch(setActiveAccountAction(accountIndex))
	}
}

export default connect(null, mapDispatchToProps)(Sidebar);
