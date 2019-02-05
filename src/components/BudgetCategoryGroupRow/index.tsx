import './budget-category-group-row.scss';
import React, { PureComponent } from 'react';
import { CategoryGroup } from '../../types/categories';

interface Props {
	categoryGroup: CategoryGroup,
	totalBudgeted: number,
	totalActivity: number,
	totalBalance: number
}

export default class BudgetCategoryGroupRow extends PureComponent<Props> {
	render() {
		return (
			<div className="budget-category-group-row">
				<div>{this.props.categoryGroup.groupName}</div>
				<div>{this.props.totalBudgeted.toFixed(2)}</div>
				<div>{this.props.totalActivity.toFixed(2)}</div>
				<div>{this.props.totalBalance.toFixed(2)}</div>
			</div>
		)
	}
}
