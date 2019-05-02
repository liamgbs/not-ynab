import './calculator-input.scss';
import React from 'react';
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

const CalculatorInput: React.FC<Props & Actions> = (props) => {
	const onBlur = () => {
		const calculatedValue = new ExpressionParser().evaluate(props.value);
		props.onBlur(calculatedValue)
	}
	return (
		<Input
			placeholder={props.placeholder}
			label={props.label}
			name={props.name}
			value={props.value}
			onChange={props.onChange}
			onBlur={onBlur}
			hoverable={props.hoverable}
		/>
	)
}

export default CalculatorInput;