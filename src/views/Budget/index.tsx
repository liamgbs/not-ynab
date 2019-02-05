import React, { PureComponent } from 'react';
import './budget.scss';
import BudgetHeader from './BudgetHeader';
import BudgetContent from './BudgetContent';
export default class Budget extends PureComponent {
	render() {
		return (
			<div className="budget">
				<BudgetHeader />
				<BudgetContent />
			</div>
		)
	}
}
