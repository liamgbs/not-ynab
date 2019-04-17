import './calculator-input.scss';
import React, { PureComponent } from 'react';
import Input from '../Input';
import ExpressionParser from '../../utils/ExpressionEvaluator';

interface Props {
	placeholder?: string,
	value: string,
	name: string,
	hoverable?: boolean
	label?: string
}

interface Actions {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	onBlur: (value?: any) => void
}

export default class CalculatorInput extends PureComponent<Props & Actions> {
	onBlur = () => {
		const calculatedValue = new ExpressionParser().evaluate(this.props.value);
				
		this.props.onBlur(calculatedValue)
	}
	render() {
		return (
			<>
				<Input
					placeholder={this.props.placeholder}
					label={this.props.label}
					name={this.props.name}
					value={this.props.value}
					onChange={this.props.onChange}
					onBlur={this.onBlur}
					hoverable={this.props.hoverable}
				/>
			</>
		)
	}
}
