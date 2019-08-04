import './value-indicator.scss'
import React from 'react'
import classNames from 'classnames';

interface Props {
	value: number,
	label?: string
	large?: boolean
}

const ValueIndicator : React.FC<Props> = ({value, label, large, ...props}) => {

		return (
			<div className={classNames({
				"value-indicator": true,
				"positive": value >= 0,
				"negative": value < 0,
				"large": large
			})}>
				<div className="value-indicator-value">
					{value.toFixed(2)}
				</div>
				{label
					? <div className="value-indicator-label">{label}</div>
					: null}
			</div>
		)
}

export default ValueIndicator
