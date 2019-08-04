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

const CalculatorInput: React.FC<Props & Actions> = ({placeholder, value, name, hoverable, label, ...props}) => {
	const onBlur = () => {
		const calculatedValue = new ExpressionParser().evaluate(value);
		props.onBlur(calculatedValue)
	}
	return (
		<Input
			placeholder={placeholder}
			label={label}
			name={name}
			value={value}
			onChange={props.onChange}
			onBlur={onBlur}
			hoverable={hoverable}
		/>
	)
}

export default CalculatorInput;