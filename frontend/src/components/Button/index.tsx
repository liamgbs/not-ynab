import './button.scss';
import React, { PureComponent } from 'react';
import classNames from 'classnames';

interface Props {
	small?: boolean,
	filled?: boolean,
	round?: boolean,
	disabled?: boolean,
}

interface Actions {
	onClick?: () => void
}

const Button: React.FC<Props & Actions> = ({filled, small, round, disabled, children, ...actions}) => {
	const CSSClasses = classNames({
		"button": true,
		"filled": filled,
		"small": small,
		"round": round,
		"disabled": disabled
	})
	return (
		<button disabled={disabled} className={CSSClasses} onClick={actions.onClick}>
			{children}
		</button>
	)
}

export default Button;
