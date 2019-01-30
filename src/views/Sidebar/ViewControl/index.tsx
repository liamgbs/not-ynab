import React, { PureComponent } from 'react'

import './viewcontrol.scss';

interface Props {
	icon: string,
	label: string,
	active: boolean
}

interface Actions {
	onClick?: () => void;
}

export default class ViewControl extends PureComponent<Props & Actions> {
	render() {
		const {icon, label} = this.props;
		return (
			<div className={`view-control ${this.props.active ? "active" : ""}`}>
				<div>
					<span className="icon">{icon}</span>
					<span className="label">{label}</span>
				</div>

			</div>
		)
	}
}
