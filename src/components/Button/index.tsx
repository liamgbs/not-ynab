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

export default class Button extends PureComponent<Props & Actions> {
	render() {
		const CSSClasses = classNames({
			"button": true,
			"filled": this.props.filled,
			"small": this.props.small,
			"round": this.props.round
		})
		return (
			<button className={CSSClasses} onClick={this.props.onClick}>
				{this.props.children}
			</button>
		)
	}
}
