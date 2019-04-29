import './value-indicator.scss'
import React from 'react'
import classNames from 'classnames';

interface Props {
	value: number,
	label?: string
	large?: boolean
}

const ValueIndicator : React.FC<Props> = (props) => {
		const CSSClasses = classNames({
			"value-indicator": true,
			"positive": props.value >= 0,
			"negative": props.value < 0,
			"large": !!props.large
		});
		return (
			<div className={CSSClasses}>
				<div className="value-indicator-value">
					{props.value.toFixed(2)}
				</div>
				{props.label
					?
					<div className="value-indicator-label">
						{props.label}
					</div>
					: null
				}
			</div>
		)
}

export default ValueIndicator
