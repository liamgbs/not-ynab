import React from 'react';
import ViewControl from './ViewControl';

import './sidebar.scss';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { AppView } from '../../types/app';
import { Dispatch } from 'redux';
import { changeViewAction } from '../../actions/app';
import AccountPicker from './AccountPicker';
import Button from '../../components/Button';
import { setActiveAccountAction } from '../../actions/accounts';
import TriggeredModal from '../../components/TriggeredModal';
import NewAccountForm from '../../forms/NewAccountForm';

interface Props {
	view: AppView
}

interface Actions {
	changeView: (view: AppView) => void
	setActiveAccount: (accountIndex: number) => void
}

const Sidebar: React.FC<Props & Actions> = (props) => {
	return (
		<div className="sidebar">
			<div className="name">Liam</div>
			<div className="view-controls">
				<ViewControl
					onClick={() => props.changeView(AppView.Budget)}
					active={props.view === AppView.Budget}
					icon="B"
					label="Budget"/>
				<ViewControl
					onClick={() => props.changeView(AppView.Reports)}
					active={props.view === AppView.Reports}
					icon="R"
					label="Reports"/>
				<ViewControl
					onClick={() => {
						props.changeView(AppView.Accounts);
						props.setActiveAccount(-1);
					}}
					active={props.view === AppView.Accounts}
					icon="A"
					label="Accounts"/>
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
		view: state.app.view
	}
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		changeView: (view: AppView) => dispatch(changeViewAction(view)),
		setActiveAccount: (accountIndex: number) => dispatch(setActiveAccountAction(accountIndex))
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (Sidebar);
