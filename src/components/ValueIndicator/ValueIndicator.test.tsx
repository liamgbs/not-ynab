import React from 'react'
import { shallow, mount } from 'enzyme';
import ValueIndicator from '.'

describe("ValueIndicator -- correct css classes for value", () => {
	let component;

	it ("Should have a positive class", () => {
		component = shallow(<ValueIndicator value={100}/>)
		expect(component.find(".value-indicator").hasClass("positive")).toBe(true);
		expect(component.find(".value-indicator").hasClass("negative")).toBe(false);

		component = shallow(<ValueIndicator value={0}/>)
		expect(component.find(".value-indicator").hasClass("positive")).toBe(true);
		expect(component.find(".value-indicator").hasClass("negative")).toBe(false);

	}) 

	it ("Should have negative class", () => {
		component = shallow(<ValueIndicator value={-100}/>)
		expect(component.find(".value-indicator").hasClass("negative")).toBe(true);
		expect(component.find(".value-indicator").hasClass("positive")).toBe(false);
	})

	it ("Should have large class", () => {
		component = shallow(<ValueIndicator large value={100}/>)
		expect(component.find(".value-indicator").hasClass("large")).toBe(true);
	})
})

describe("ValueIndicator -- should render correctly", () => {
	let component;
	it ("Should render label if passed as props", () => {
		component = shallow(<ValueIndicator value={100}/>)
		expect(component.find(".value-indicator").children().length).toEqual(1)

		component = shallow(<ValueIndicator label="Hello, World" value={100}/>)
		expect(component.find(".value-indicator").children().length).toEqual(2)
	})
})