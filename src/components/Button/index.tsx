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
		${this.props.filled ? "filled" : null}
		${this.props.small ? "small" : null}
		${this.props.round ? "round" : null}
		`;

		return (
			<button className={className} onClick={this.props.onClick}>
				{this.props.children}
			</button>
		)
	}
}
