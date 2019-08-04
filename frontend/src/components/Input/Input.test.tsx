import React from 'react'
import { shallow, mount } from 'enzyme';
import Input from '../Input'

describe("Input", () => {
	let component: any;
	let newValue = "";
	let changeFunc = (event: React.ChangeEvent<HTMLInputElement>) => {newValue = event.target.value};
	const blurFunc = jest.fn();

	it("Should change on event", () => {
		component = mount(<Input value={""} name="test" onChange={changeFunc} onBlur={blurFunc}/>)

		component.simulate('change', {target: {value: "hello"}});
		expect(newValue).toBe("hello");
	})

	it("Should have correct state", () => {
		component = mount(<Input value={""} name="test" onChange={changeFunc} onBlur={blurFunc}/>)

		component.simulate('focus');
		expect(component.state("focused")).toBe(true);

		component.simulate('blur');
		expect(blurFunc).toBeCalled();
		expect(component.state("focused")).toBe(false);
	})

	it("should show a label", () => {
		component = shallow(<Input value={""} name="test" label="hello test" hoverable={false} onChange={changeFunc}/>)

		expect(component.find(".input-label").text()).toEqual("hello test")

	})

	it("Should render correctly based on state", () => {

		component = shallow(<Input value={""} name="test" hoverable={false} onChange={changeFunc}/>)
		
		component.setState({
			hovered: true,
		});

		expect(component.find(".input").type()).toEqual("input");

		component = shallow(<Input value={""} name="test" hoverable={true} onChange={changeFunc}/>)

		expect(component.find(".input-off").type()).toEqual("div");

		component.setState({
			hovered: true,
		});

		expect(component.find(".input").type()).toEqual("input");

		component.setState({
			hovered: false,
			focused: true
		});

		expect(component.find(".input").type()).toEqual("input");

		component.setState({
			hovered: true,
		});

		expect(component.find(".input").type()).toEqual("input");

		component.setState({
			hovered: false,
			focused: false,
		});

		expect(component.find(".input-off").type()).toEqual("div");

	})

	
})




