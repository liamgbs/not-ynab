import './button.scss';
import React, { PureComponent } from 'react';
import classNames from 'classnames';

interface Props {
	small?: boolean,
	filled?: boolean,
	round?: boolean,
}

interface Actions {
	onClick?: () => void
}

const Button: React.FC<Props & Actions> = (props) => {
	const CSSClasses = classNames({
		"button": true,
		"filled": props.filled,
		"small": props.small,
		"round": props.round
	})
	return (
		<button className={CSSClasses} onClick={props.onClick}>
			{props.children}
		</button>
	)
}

export default Button;
