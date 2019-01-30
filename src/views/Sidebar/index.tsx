import React, { PureComponent } from 'react';
import ViewControl from './ViewControl';

import './sidebar.scss';

export default class Sidebar extends PureComponent {
	render() {
		return (
			<div className="sidebar">
				<div className="name"> Liam</div>
				<div className="view-controls">
					<ViewControl icon="B" label="Budget"/>
					<ViewControl icon="R" label="Reports"/>
					<ViewControl icon="A" label="Accounts"/>
				</div>
				<div className="accounts-controls">
				
				</div>
			</div>
		)
	}
}
