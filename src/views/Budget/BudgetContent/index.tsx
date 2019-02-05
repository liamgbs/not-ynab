import './budget-content.scss';
import React, { PureComponent } from 'react';
import BudgetCategories from './BudgetCategories';
import BudgetSidebar from './BudgetSidebar';

export default class BudgetContent extends PureComponent {
	render() {
		return (
			<div className="budget-content">
				<div className="budget-category-toolbar">
					category controls
				</div>
				<div className="budget-category-controls">
					<BudgetCategories />
					<BudgetSidebar />
				</div>

			</div>
		)
	}
}
