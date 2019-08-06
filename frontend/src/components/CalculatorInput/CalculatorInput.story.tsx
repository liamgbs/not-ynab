import '../../styles/global.scss';
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import CalculatorInput from '../CalculatorInput';

const Helper: React.FC<Partial<React.ComponentProps<typeof CalculatorInput>>> = (props) => {
	const [value, setValue] = useState("20")

	return (
		<div style={{width: "200px", height: "30px"}}>
			<CalculatorInput
				value={value}
				name="test"
				onChange={(e) => setValue(e.target.value)}
				onBlur={(v) => setValue(v)}
				{...props}/>
		</div>
	)
}

storiesOf('Calculator Input', module)
	.add("Hoverable", () => <Helper hoverable/>)
	.add("Not Hoverable", () => <Helper />)
	.add("With label", () => <Helper label="fart" />)
	.add("Disabled", () => <Helper disabled/>)


