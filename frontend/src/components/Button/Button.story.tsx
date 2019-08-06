import '../../styles/global.scss';
import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '.';


storiesOf('Button', module)
	.add('Small', () => <Button small>Hello</Button>)
	.add('Filled', () => <Button filled>Next</Button>)
	.add('Round', () => <Button round>Show All</Button>)
	.add('Disabled', () => <Button disabled>Disabled</Button>)
