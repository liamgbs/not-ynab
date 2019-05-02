import './drop-down.scss';
import React, { PureComponent } from 'react'

interface Props {
	options: string[],
	value: string,
	name?: string,
	label?: string
}

interface Actions {
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Dropdown: React.FC<Props & Actions> = (props) => {
	const { options, value, name, label } = props;
	return (
		<>
			{label ?
				<div className="drop-down-label">{label}</div> : null}
			<select name={name} value={value} onChange={props.onChange} className="drop-down">
				{options.map(option => {
					return (
						<option value={option} key={option}>
							{option}
						</option>
					)
				})}
			</select>
		</>
	)
}

export default Dropdown;