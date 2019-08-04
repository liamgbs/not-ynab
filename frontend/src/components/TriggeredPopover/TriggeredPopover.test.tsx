import React from 'react'
import { shallow, mount } from 'enzyme';
import TriggeredPopover from '../TriggeredPopover';

describe("TriggeredPopover -- popover triggers correctly", () => {
	let trigger = <button className="test-trigger">Hello, world</button>
	let okAction = jest.fn();

	let component = mount(
		<TriggeredPopover okAction={okAction} trigger={trigger}>
			<div className="test-content">Hello, world</div>
		</TriggeredPopover>)

	it("Should render the trigger", () => {
		expect(component.find(".test-trigger").exists()).toBe(true)
	})

	it("Should render the pop up", () => {
		expect(component.find(".popup-container").exists()).toBe(false);
		expect(component.state("active")).toBe(false)

		component.find(".test-trigger").simulate("click");

		expect(component.find(".popup-container").exists()).toBe(true);
		expect(component.state("active")).toBe(true)

	})
})