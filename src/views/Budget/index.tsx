import React from 'react';
import './budget.scss';
import BudgetHeader from './BudgetHeader';
import BudgetContent from './BudgetContent';

const Budget: React.FC<{}> = () => {
	return (
		<div className="budget">
			<BudgetHeader />
			<BudgetContent />
		</div>
	)
}

export default Budget;
