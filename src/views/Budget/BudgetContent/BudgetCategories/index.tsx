import './budget-categories.scss';
import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../../../reducers';
import { CategoryGroup, Category } from '../../../../types/categories';
import BudgetCategoryGroupRow from './BudgetCategoryGroupRow';
import BudgetCategoryRow from './BudgetCategoryRow';
import { getMonth } from '../../../../utils/helpers';
import { Transaction } from '../../../../types/transactions';

interface Props {
	categories: Category[],
	groups: CategoryGroup[],
	activeMonth: number,
	transactions: Transaction[]
}

interface Actions {
}

const BudgetCategories: React.FC<Props & Actions> = (props) => {
	const activity = props.transactions.reduce((acc: any, cur: any) => ({
		...acc,
		[cur.categoryName]: (acc[cur.categoryName] || 0) + cur.inflow - cur.outflow
	}), {})
	
	return (
		<div className="budget-categories">
			<div className="budget-categories-header">
				<div>CATEGORY</div>
				<div>BUDGETED</div>
				<div>ACTIVITY</div>
				<div>AVAILABLE</div>
			</div>
			{props.groups.map((g, i) => {
				const groupCategories = props.categories.filter(c => g.groupName === c.categoryGroup);
				const totalBudgeted: number = groupCategories.reduce((sum, c) => sum + c.budgeted, 0);
				const totalActivity: number = groupCategories.reduce((sum, c) => sum + (activity[c.categoryName] || 0), 0);
				const totalBalance: number = groupCategories.reduce((sum, c) => sum + c.balance, 0)

				return (
					<div key={i}>
						<BudgetCategoryGroupRow
							categoryGroup={g}
							totalBudgeted={totalBudgeted}
							totalActivity={totalActivity}
							totalBalance={totalBalance}
						/>
						{groupCategories.map((gc, i) => <BudgetCategoryRow activity={activity[gc.categoryName]} key={i} category={gc} />)}
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
		transactions: state.transactions.transactions.filter(t => getMonth(t.date) === month.monthName),
		activeMonth: state.budget.activeMonth
	}
}

export default connect(mapStateToProps)(BudgetCategories)