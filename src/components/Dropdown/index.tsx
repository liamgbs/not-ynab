import './drop-down.scss';
import React, { PureComponent, ChangeEvent } from 'react'

interface Props {
	options: string[],
	value: string,
}

interface Actions {
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export default class Drowdown extends PureComponent<Props & Actions> {
	render() {
		const { options } = this.props;

		return (
			<select onChange={this.props.onChange} className="drop-down">
				{options.map(option => {
					<option value={option.toLowerCase()} key={option}>
						{option}
					</option>
				})}
			</select>
		)
	}
}
