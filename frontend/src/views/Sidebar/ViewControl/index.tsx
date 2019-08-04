import React from 'react'
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

const ViewControl: React.FC<Props & Actions> = ({icon, label, active, ...props}) => {
	const CSSClasses = classNames({
		"view-control": true,
		"active": active
	})
	return (
		<div onClick={props.onClick} className={CSSClasses}>
			<div>
				<span className="icon">{icon}</span>
				<span className="label">{label}</span>
			</div>
		</div>
	)
}

export default ViewControl;