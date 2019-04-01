import './input.scss';
import React, { PureComponent, Fragment } from 'react'

interface Props {
	placeholder?: string,
	value: string
	name: string,
	hoverable?: boolean
}

interface Actions {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
	onBlur?: () => void
}

export default class Input extends PureComponent<Props & Actions> {
	state={
		hovered: false,
		focused: false
	}
	handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.props.onChange(event);
	}
	onFocus() {
		this.setState({
			focused: true
		})
	}
	onBlur() {
		this.setState({
			focused: false
		})
		if (this.props.onBlur)
			this.props.onBlur();
	}
	onMouseEnter() {
		this.setState({
			hovered: true
		})
	}
	onMouseLeave() {
		this.setState({
			hovered: false
		})
	}
	render() {
		return (
			<Fragment>
				{!this.props.hoverable || this.state.focused || this.state.hovered ? 
					<input
						className="input"
						placeholder={this.props.placeholder}
						name={this.props.name}
						value={this.props.value}
						onChange={this.handleChange.bind(this)}
						onBlur={this.onBlur.bind(this)}
						onFocus={this.onFocus.bind(this)}
						onMouseLeave={this.onMouseLeave.bind(this)}
					/> :
					<div
						className="input-off"
						onMouseEnter={this.onMouseEnter.bind(this)}
					>
						{this.props.value}
					</div>
				}
			</Fragment>
		)
	}
}
