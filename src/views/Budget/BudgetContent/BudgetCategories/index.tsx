import './budget-categories.scss';
import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { RootState } from '../../../../reducers';
import { CategoryGroup, Category } from '../../../../types/categories';
import BudgetCategoryRow from '../../../../components/BudgetCategoryRow';
import BudgetCategoryGroupRow from '../../../../components/BudgetCategoryGroupRow';
import { addCategoryAction } from '../../../../actions/budget';

interface Props {
	categories: Category[],
	groups: CategoryGroup[]
}

interface Actions {
	addCategory:(groupName:string, categoryName:string)=>void
}

class BudgetCategories extends PureComponent<Props & Actions> {
	render() {
		return (
			<div className="budget-categories">
				<div className="budget-categories-header">
					<div>Category</div>
					<div>Budgeted</div>
					<div>Activity</div>
					<div>Available</div>
				</div>
				{this.props.groups.map((g, i) => {
					const groupCategories = this.props.categories.filter(c => g.groupName === c.categoryGroup);
					const totalBudgeted : number = groupCategories.reduce((sum, c) => sum + c.budgeted, 0);
					const totalActivity : number = groupCategories.reduce((sum, c) => sum + c.activity, 0);
					const totalBalance : number = groupCategories.reduce((sum, c) => sum + c.balance, 0)

					return (
						<div key={i}>
							<BudgetCategoryGroupRow
								addCategory={this.props.addCategory}
								categoryGroup={g}
								totalBudgeted={totalBudgeted}
								totalActivity={totalActivity}
								totalBalance={totalBalance} 
							/>
							{groupCategories.map((gc, i) => <BudgetCategoryRow key={i} category={gc}/>)}
						</div>
					)
				})}
			</div>
		)
	}
}

const mapStateToProps = (state: RootState) => {
	const month = state.budget.months.find(m => { return m.monthName === state.app.budget.activeMonth })!
	return {
		categories: month.categories,
		groups: month.categoryGroups
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		addCategory: (groupName:string, categoryName:string) => {
			dispatch(addCategoryAction(groupName, categoryName));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetCategories)