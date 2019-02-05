import './budget-category-row.scss';

import React, { PureComponent } from 'react';

import { Category } from '../../types/categories';

interface Props {
	category: Category
}

export default class BudgetCategoryRow extends PureComponent<Props> {
	state={
		editing: false
	}
	render() {
		return (
			<div className="budget-category-row">
				<div>{this.props.category.categoryName}</div>
				<div>{this.props.category.budgeted.toFixed(2)}</div>
				<div>{this.props.category.activity.toFixed(2)}</div>
				<div>{this.props.category.balance.toFixed(2)}</div>
			</div>
		)
	}
}
