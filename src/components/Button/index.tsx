import './button.scss';
import React, { PureComponent } from 'react';

interface Props {
	small?: boolean,
	filled?: boolean,
	round?: boolean,
}

interface Actions {
	onClick?: () => void
}

export default class Button extends PureComponent<Props & Actions> {
	render() {
		const className = 
		`button
		${this.props.filled ? "filled" : ""}
		${this.props.small ? "small" : ""}
		${this.props.round ? "round" : ""}
		`;

		return (
			<button className={className} onClick={this.props.onClick}>
				{this.props.children}
			</button>
		)
	}
}
