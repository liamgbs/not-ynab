import React from 'react'
import { shallow, mount } from 'enzyme';
import Button from '../Button'

describe("Button Component -- filled", () => {
	let wrapper: any;

	beforeEach(() => {
		wrapper = shallow(<Button filled>Hello, World!</Button>)
	})

	it("Should have filled css class", () => {
		expect(wrapper.find('button.button.filled').type()).toEqual('button')
	})
})

describe("Button Component -- round", () => {
	let wrapper: any;

	beforeEach(() => {
		wrapper = shallow(<Button round>Hello, World!</Button>)
	})

	it("Should have round css class", () => {
		expect(wrapper.find('button.button.round').type()).toEqual('button')
	})
})

describe("Button Component -- small", () => {
	let wrapper: any;

	beforeEach(() => {
		wrapper = shallow(<Button small>Hello, World!</Button>)
	})

	it("Should have small css class", () => {
		expect(wrapper.find('button.button.small').type()).toEqual('button')
	})
})




