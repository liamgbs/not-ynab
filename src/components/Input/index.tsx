import './input.scss';
import React, { PureComponent, Fragment } from 'react'

interface Props {
	placeholder?: string,
	value: string
}

interface Actions {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default class Input extends PureComponent<Props & Actions> {
	handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.props.onChange(event);
	}
	render() {
		return (
			<Fragment>
				<input
					className="input"
					placeholder={this.props.placeholder}
					onChange={this.handleChange.bind(this)}
					value={this.props.value}
				/>
			</Fragment>
		)
	}
}
