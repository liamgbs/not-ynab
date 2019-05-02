import './input.scss';
import React, { useState } from 'react'

interface Props {
	placeholder?: string,
	value: string
	name: string,
	hoverable?: boolean
	label?: string
}

interface Actions {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
	onBlur?: () => void
}

const Input: React.FC<Props & Actions> = (props) => {
	const [hovered, setHovered] = useState<boolean>(false);
	const [focused, setFocused] = useState<boolean>(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		props.onChange(event);
	}

	const onBlur = () => {
		setFocused(false);
		if (props.onBlur) props.onBlur();
	}

	return (
		<>
			{!props.hoverable || focused || hovered ?
				<>
					{props.label ?
						<div className="input-label">{props.label}</div> : null}

					<input
						className="input"
						placeholder={props.placeholder}
						name={props.name}
						value={props.value}
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
					{props.value}
				</div>
			}
		</>
	)

}

export default Input;
