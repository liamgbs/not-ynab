import React, { PureComponent } from 'react';
import ViewControl from './ViewControl';

import './sidebar.scss';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { AppView } from '../../types/app';

interface Props {
	view: AppView
}

class Sidebar extends PureComponent<Props> {
	render() {
		return (
			<div className="sidebar">
				<div className="name"> Liam</div>
				<div className="view-controls">
					<ViewControl active={this.props.view === AppView.Budget} icon="B" label="Budget"/>
					<ViewControl active={this.props.view === AppView.Reports} icon="R" label="Reports"/>
					<ViewControl active={this.props.view === AppView.Account} icon="A" label="Accounts"/>
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

export default connect(mapStateToProps) (Sidebar);
