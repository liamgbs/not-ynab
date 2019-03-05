import './calculator-input.scss';
import React, { PureComponent, Fragment } from 'react';
import Input from '../Input';
import ExpressionParser from '../../utils/ExpressionEvaluator';

interface Props {
	placeholder?: string,
	value: string
	hoverable?: boolean
}

interface Actions {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	onBlur: (value?: any) => void
}

export default class CalculatorInput extends PureComponent<Props & Actions> {
	onBlur() {
		const calculatedValue = new ExpressionParser().evaluate(this.props.value);		
		this.props.onBlur(calculatedValue)
	}
	render() {
		return (
			<Fragment>
				<Input
					placeholder={this.props.placeholder}
					value={this.props.value}
					onChange={this.props.onChange}
					onBlur={this.onBlur.bind(this)}
					hoverable={this.props.hoverable}
				/>
			</Fragment>
		)
	}
}
