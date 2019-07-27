import './budget-categories.scss';
import React from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../../../reducers';
import BudgetCategoryGroupRow from './BudgetCategoryGroupRow';
import BudgetCategoryRow from './BudgetCategoryRow';

const BudgetCategories: React.FC<ReturnType<typeof mapStateToProps>> = ({categories, groups, ...props}) => {

	return (
		<div className="budget-categories">
			<div className="budget-categories-header">
				<div>CATEGORY</div>
				<div>BUDGETED</div>
				<div>ACTIVITY</div>
				<div>AVAILABLE</div>
			</div>
			{groups.map((g, i) => {
				const groupCategories = categories.filter(c => g.groupName === c.categoryGroup);
				const totalBudgeted: number = groupCategories.reduce((sum, c) => sum + c.budgeted, 0);
				const totalActivity: number = groupCategories.reduce((sum, c) => sum + c.activity, 0);
				const totalBalance: number = groupCategories.reduce((sum, c) => sum + c.balance, 0)

				return (
					<div key={i}>
						<BudgetCategoryGroupRow
							categoryGroup={g}
							totalBudgeted={totalBudgeted}
							totalActivity={totalActivity}
							totalBalance={totalBalance}
						/>
						{groupCategories.map((gc, i) => <BudgetCategoryRow key={i} category={gc} />)}
					</div>
				)
			})}
		</div>
	)
}

function mapStateToProps(state: RootState) {
	const month = state.budget.months[state.budget.activeMonth]

	return {
		categories: month.categories,
		groups: month.categoryGroups,
	}
}

export default connect(mapStateToProps)(BudgetCategories)