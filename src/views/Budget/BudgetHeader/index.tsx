import './budget-header.scss';
import React, { PureComponent } from 'react'
import MonthControl from './MonthControl';
import MonthSummary from './MonthSummary';

export default class BudgetHeader extends PureComponent {
	render() {
		return (
			<div className="budget-header">
				<MonthControl />
				<MonthSummary />
				<div className="age-of-money">40 years</div>
			</div>
		)
	}
}
