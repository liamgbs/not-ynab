import './value-indicator.scss'
import React, { PureComponent } from 'react'
import classNames from 'classnames';

interface Props {
	value: number,
	label?: string
	large?: boolean
}

export default class ValueIndicator extends PureComponent<Props> {
	render() {
		const CSSClasses = classNames({
			"value-indicator": true,
			"positive": this.props.value >= 0,
			"negative": this.props.value < 0,
			"large": !!this.props.large
		});
		return (
			<div className={CSSClasses}>
				<div className="value-indicator-value">
					{this.props.value.toFixed(2)}
				</div>
				{this.props.label
					?
					<div className="value-indicator-label">
						{this.props.label}
					</div>
					: null
				}
			</div>
		)
	}
}
