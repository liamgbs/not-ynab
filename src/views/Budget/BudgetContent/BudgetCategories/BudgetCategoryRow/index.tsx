import './budget-category-row.scss';

import React, { PureComponent } from 'react';
import { Category } from '../../../../../types/categories';
import { connect } from 'react-redux';
import { setMonthBudgetedAction } from '../../../../../actions/budget';
import CalculatorInput from '../../../../../components/CalculatorInput';
import { Dispatch } from 'redux';

interface Props {
	category: Category
}

interface Actions {
	setCategoryBudgeted: (categoryName: string, value: number) => void
}

class BudgetCategoryRow extends PureComponent<Props & Actions> {
	state={
		budgeted: this.props.category.budgeted
	}
	render() {
		return (
			<div className="budget-category-row">
				<div className="budget-category-row-name">
					{this.props.category.categoryName}
				</div>
				<CalculatorInput 
					value={this.props.category.budgeted.toFixed(2)}
					onChange={((value: number) => {
						this.props.setCategoryBudgeted(this.props.category.categoryName, value)
					})}
				/>
				<div>{this.props.category.activity.toFixed(2)}</div>
				<div>{this.props.category.balance.toFixed(2)}</div>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		setCategoryBudgeted: (categoryName: string, value: number) => {			
			dispatch(setMonthBudgetedAction(categoryName, value));
		}
	}

}

export default connect(null, mapDispatchToProps)(BudgetCategoryRow);
