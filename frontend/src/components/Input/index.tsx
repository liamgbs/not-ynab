import './input.scss';
import React, { useState, DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface Props {
	placeholder?: string,
	value: string
	name: string,
	hoverable?: boolean,
	disabled?: boolean,
	label?: string,
	type?: string
}

interface Actions {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
	onBlur?: () => void,
	onChangeValidate?(value: string): boolean
}

const Input: React.FC<Props & Actions> = ({placeholder, value, name, hoverable, label, disabled, type, ...actions}) => {
	const [hovered, setHovered] = useState<boolean>(false);
	const [focused, setFocused] = useState<boolean>(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (actions.onChangeValidate && actions.onChangeValidate(event.target.value) === false) {
			return;
		}

		actions.onChange(event);
	}

	const onBlur = () => {
		setFocused(false);
		if (actions.onBlur) actions.onBlur();
	}

	return (
		<div className="input-wrapper">
			{!hoverable || focused || hovered ?
				<>
					{label ?
						<div className="input-label">{label}</div> : null}

					<input
						className="input"
						placeholder={placeholder}
						disabled={disabled}
						name={name}
						value={value}
						type={type || "text"}
						onChange={handleChange}
						onBlur={onBlur}
						onFocus={() => setFocused(true)}
						onMouseLeave={() => setHovered(false)}
					/>
				</> :
				<div
					className="input-off"
					onMouseEnter={() => setHovered(true)}
				>
					{value}
				</div>
			}
		</div>
	)

}

export default Input;
