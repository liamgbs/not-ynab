import '../../styles/global.scss';
import React, { useState, ReactElement } from 'react';
import { storiesOf } from '@storybook/react';
import CalculatorInput from '.';

interface HelperProps {
	hoverable?: boolean,
	label?: string
}



const Helper: React.FC<HelperProps> = ({hoverable, label}) => {
	const [value, setValue] = useState("20")

	return (
		<div style={{width: "200px", height: "30px"}}>
			<CalculatorInput
			hoverable={hoverable}
			label={label}
			value={value}
			name="test"
			onChange={(e) => setValue(e.target.value)}
			onBlur={(v) => setValue(v)}/>
		</div>
	)
}

storiesOf('Calculator Input', module)
	.add("Hoverable", () => <Helper hoverable/>)
	.add("Not Hoverable", () => <Helper />)
	.add("With label", () => <Helper label="fart" />)


