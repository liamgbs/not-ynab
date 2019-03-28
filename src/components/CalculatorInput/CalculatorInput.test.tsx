import React from 'react'
import { shallow, mount } from 'enzyme';
import CalculatorInput from '.'

describe("CalculatorInput -- Calculations", () => {
	let component: any;
	let calculatedVal: number;
	let blurFunc = jest.fn((calculatedOutput) => {calculatedVal = calculatedOutput});
	let changeFunc = jest.fn();

	it("Should ", () => {
		component = mount(<CalculatorInput value="1+1" name="test" onBlur={blurFunc} onChange={changeFunc}/>)

		component.simulate('focus');
		component.simulate('blur')
		
		expect(calculatedVal).toEqual(2);
		
	})
})




