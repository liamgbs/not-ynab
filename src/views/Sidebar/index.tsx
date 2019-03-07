import React, { PureComponent } from 'react';
import ViewControl from './ViewControl';

import './sidebar.scss';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { AppView } from '../../types/app';
import { Dispatch } from 'redux';
import { changeViewAction } from '../../actions/app';

interface Props {
	view: AppView
}

interface Actions {
	changeView: (view: AppView) => void
}

class Sidebar extends PureComponent<Props & Actions> {
	render() {
		return (
			<div className="sidebar">
				<div className="name">Liam</div>
				<div className="view-controls">
					<ViewControl
						onClick={() => this.props.changeView(AppView.Budget)}
						active={this.props.view === AppView.Budget}
						icon="B"
						label="Budget"/>
					<ViewControl
						onClick={() => this.props.changeView(AppView.Reports)}
						active={this.props.view === AppView.Reports}
						icon="R"
						label="Reports"/>
					<ViewControl
						onClick={() => this.props.changeView(AppView.Accounts)}
						active={this.props.view === AppView.Accounts}
						icon="A"
						label="Accounts"/>
				</div>
				<div className="accounts-controls">
				
				</div>
			</div>
		)
	}
}

function mapStateToProps(state: RootState) {
	return {
		view: state.app.view
	}
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		changeView: (view: AppView) => dispatch(changeViewAction(view))
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (Sidebar);
