import './budget-categories.scss';
import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../../../reducers';
import { CategoryGroup, Category } from '../../../../types/categories';

interface Props {
	categories: Category[],
	groups: CategoryGroup[]
}

interface Actions {

}

class BudgetCategories extends PureComponent<Props & Actions> {
	render() {
		return (
			<div className="budget-categories">
				{this.props.groups.map(g => {
					const groupCategories = this.props.categories.filter(c => g.groupName === c.categoryGroup)
					return (
						<div>
							<div>{g.groupName}</div>
							{groupCategories.map(gc => {
								return (
									<div>{gc.categoryName}</div>
								)
							})}
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

export default connect(mapStateToProps)(BudgetCategories)