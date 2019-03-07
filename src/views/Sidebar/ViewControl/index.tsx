import React, { PureComponent } from 'react'
import classNames from 'classnames';

import './viewcontrol.scss';

interface Props {
	icon: string,
	label: string,
	active: boolean
}

interface Actions {
	onClick: () => void;
}

export default class ViewControl extends PureComponent<Props & Actions> {
	render() {
		const CSSClasses = classNames({
			"view-control": true,
			"active": !!this.props.active
		})
		return (
			<div onClick={this.props.onClick} className={CSSClasses}>
				<div>
					<span className="icon">{this.props.icon}</span>
					<span className="label">{this.props.label}</span>
				</div>
			</div>
		)
	}
}
