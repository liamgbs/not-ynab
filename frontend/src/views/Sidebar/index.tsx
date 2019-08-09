import './sidebar.scss';
import React from 'react';
import ViewControl from './ViewControl';

import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import AccountPicker from './AccountPicker';
import Button from '../../components/Button';
import TriggeredModal from '../../components/TriggeredModal';
import NewAccountForm from '../../forms/NewAccountForm';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/user';

interface Props extends ReturnType<typeof mapStateToProps> {
	logout(): void
}

const Sidebar: React.FC<Props> = ({user, ...actions}) => {
	return (
		<div className="sidebar">
			<div className="name">{user} <span onClick={actions.logout}>Logout</span></div>
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



function mapStateToProps(state: RootState) {
	return {
		user: state.user.user
	}
}

export default connect(mapStateToProps, {logout})(Sidebar);
