import React from 'react'
import { shallow, mount } from 'enzyme';
import CalculatorInput from '.'

describe("CalculatorInput -- Calculations", () => {
	let component: any;
	let toCalculate: string;
	let calculatedVal: number;
	let blurFunc = jest.fn((calculatedOutput) => {calculatedVal = calculatedOutput});
	let changeFunc = jest.fn();

	it("Should equal 1", () => {
		toCalculate = "1";
		component = mount(<CalculatorInput value={toCalculate} name="test" onBlur={blurFunc} onChange={changeFunc}/>)

		component.simulate('focus');
		component.simulate('blur')
		
		expect(calculatedVal).toEqual(1);
	})

	it("Should equal -1", () => {
		toCalculate = "-1";
		component = mount(<CalculatorInput value={toCalculate} name="test" onBlur={blurFunc} onChange={changeFunc}/>)

		component.simulate('focus');
		component.simulate('blur')
		
		expect(calculatedVal).toEqual(-1);
	})

	it("Should equal 1.0", () => {
		toCalculate = "1.0 + 4 / 2";
		component = mount(<CalculatorInput value={toCalculate} name="test" onBlur={blurFunc} onChange={changeFunc}/>)

		component.simulate('focus');
		component.simulate('blur')
		
		expect(calculatedVal).toEqual(3.0);
	})

	it("Should equal 2", () => {
		toCalculate = "(100 + 4) / 2";
		component = mount(<CalculatorInput value={toCalculate} name="test" onBlur={blurFunc} onChange={changeFunc}/>)

		component.simulate('focus');
		component.simulate('blur')
		
		expect(calculatedVal).toEqual(52);
	})

	it("Should ignore whitespace and equal 1.5", () => {
		toCalculate = "1+           0.5";
		component = mount(<CalculatorInput value={toCalculate} name="test" onBlur={blurFunc} onChange={changeFunc}/>)

		component.simulate('focus');
		component.simulate('blur')
		
		expect(calculatedVal).toEqual(1.5);
	})

	it("Should equal 0.3", () => {
		toCalculate = "1+-0.7";
		component = mount(<CalculatorInput value={toCalculate} name="test" onBlur={blurFunc} onChange={changeFunc}/>)

		component.simulate('focus');
		component.simulate('blur');
		
		expect(calculatedVal).toEqual(0.30000000000000004);
	})
})




