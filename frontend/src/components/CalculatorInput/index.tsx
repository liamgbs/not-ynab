import './calculator-input.scss';
import React from 'react';
import Input from '../Input';
import ExpressionParser from '../../utils/ExpressionEvaluator';

interface Props {
	placeholder?: string,
	value: string,
	name: string,
	disabled?: boolean,
	hoverable?: boolean
	label?: string
}

interface Actions {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	onBlur: (value?: any) => void
}

const CalculatorInput: React.FC<Props & Actions> = ({placeholder, value, name, hoverable, label, disabled, ...actions}) => {
	const onBlur = () => {
		const calculatedValue = new ExpressionParser().evaluate(value);
		actions.onBlur(calculatedValue)
	}
	return (
		<Input
			placeholder={placeholder}
			disabled={disabled}
			label={label}
			name={name}
			value={value}
			onChange={actions.onChange}
			onBlur={onBlur}
			hoverable={hoverable}
		/>
	)
}

export default CalculatorInput;