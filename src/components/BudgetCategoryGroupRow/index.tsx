import './budget-category-group-row.scss';
import React, { PureComponent } from 'react';
import { CategoryGroup } from '../../types/categories';

interface Props {
	categoryGroup: CategoryGroup,
	totalBudgeted: number,
	totalActivity: number,
	totalBalance: number
}

interface Actions {
	addCategory:(groupName:string, categoryName:string)=>void
}

export default class BudgetCategoryGroupRow extends PureComponent<Props & Actions> {
	render() {
		return (
			<div className="budget-category-group-row">
				<div>
					<span>{this.props.categoryGroup.groupName}</span>
					<button onClick={(e) => this.props.addCategory(this.props.categoryGroup.groupName, "test")}>+</button>
				</div>
				<div>{this.props.totalBudgeted.toFixed(2)}</div>
				<div>{this.props.totalActivity.toFixed(2)}</div>
				<div>{this.props.totalBalance.toFixed(2)}</div>
			</div>
		)
	}
}
