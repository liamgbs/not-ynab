import './budget-header.scss';
import React, { PureComponent } from 'react'
import MonthControl from './MonthControl';

export default class BudgetHeader extends PureComponent {
	render() {
		return (
			<div className="budget-header">
				<MonthControl />
				<div className="month-summary">stuff</div>
				<div className="age-of-money">40 years</div>
			</div>
		)
	}
}
