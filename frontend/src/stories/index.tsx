import '../styles/global.scss';
import React from 'react';

import { storiesOf } from '@storybook/react';

import { linkTo } from '@storybook/addon-links';

import CalculatorInput from '../components/CalculatorInput';

import Button from '../components/Button';
import Input from '../components/Input';


storiesOf('Button', module)
	.add('Small', () => <Button small>Hello</Button>)
	.add('Filled', () => <Button filled>Next</Button>)
	.add('Round', () => <Button round>Show All</Button>)	


storiesOf('Input', module)
	.add('', () => <Input value="cant edit sorry" name="sadas" onChange={()=>{}}/>)

storiesOf('Calculator Input', module)

storiesOf('Dropdown', module)

storiesOf('Modal', module)

storiesOf('Triggered Modal', module)

storiesOf('Triggered Popover', module)

storiesOf('Value indicator', module)

