import './input.scss';
import React, { PureComponent } from 'react'

interface Props {
	placeholder?: string,
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
			<div className="input">
				<input placeholder={this.props.placeholder} onChange={this.handleChange} />
			</div>
		)
	}
}
