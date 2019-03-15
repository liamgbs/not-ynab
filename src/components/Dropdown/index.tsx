import './drop-down.scss';
import React, { PureComponent } from 'react'

interface Props {
	options: string[],
	value: string,
	name?: string
}

interface Actions {
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export default class Dropdown extends PureComponent<Props & Actions> {
	render() {
		const { options, value, name } = this.props;				
		return (
			<select name={name} value={value} onChange={this.props.onChange} className="drop-down">
				{options.map(option => {
					return (
						<option value={option} key={option}>
							{option}
						</option>
					)
				})}
			</select>
		)
	}
}
