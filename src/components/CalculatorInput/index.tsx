import './calculator-input.scss';
import React, { PureComponent, Fragment } from 'react';
import Input from '../Input';
import ExpressionParser from '../../utils/ExpressionEvaluator';

interface Props {
	placeholder?: string,
	value: string
}

interface Actions {
	onChange: (value?: any) => void
}


export default class CalculatorInput extends PureComponent<Props & Actions> {
	render() {
		const calculatedValue = new ExpressionParser().evaluate(this.props.value);
		return (
			<Fragment>
				<Input
					placeholder={this.props.placeholder}
					value={calculatedValue!.toString()}
					onChange={() => {this.props.onChange(calculatedValue)}}
				/>
			</Fragment>
		)
	}
}
