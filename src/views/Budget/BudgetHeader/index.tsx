import './budget-header.scss';
import React from 'react'
import MonthControl from './MonthControl';
import MonthSummary from './MonthSummary';

const BudgetHeader: React.FC<{}> = () => {
	return (
		<div className="budget-header">
			<MonthControl />
			<MonthSummary />
			<div className="age-of-money">40 years</div>
		</div>
	)
}

export default BudgetHeader;