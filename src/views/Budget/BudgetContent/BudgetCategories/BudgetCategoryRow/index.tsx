import './budget-category-row.scss';

import React, { useState, useEffect } from 'react';
import { Category } from '../../../../../types/categories';
import { connect } from 'react-redux';
import { setMonthBudgetedAction } from '../../../../../actions/budget';
import CalculatorInput from '../../../../../components/CalculatorInput';
import { Dispatch } from 'redux';
import ValueIndicator from '../../../../../components/ValueIndicator';

interface Props {
	category: Category
}

interface Actions {
	setCategoryBudgeted: (categoryName: string, value: number) => void
}

const BudgetCategoryRow: React.FC<Props & Actions> = (props) => {
	const [budgeted, setBudgeted] = useState<string>(props.category.budgeted.toFixed(2))

	const handleBlur = (value: number) => {
		if (value === value) {
			props.setCategoryBudgeted(props.category.categoryName, value);
			setBudgeted(value.toFixed(2))
		} else {
			setBudgeted(0.0.toFixed(2));
		}
	}


	useEffect(() => setBudgeted(props.category.budgeted.toFixed(2)), [props])

	return (
		<div className="budget-category-row">
			<div className="budget-category-row-name">
				{props.category.categoryName}
			</div>
			<CalculatorInput
				hoverable
				name="budgeted"
				value={budgeted}
				onChange={(event) => setBudgeted(event.target.value)}
				onBlur={handleBlur}
			/>
			<div>{props.category.activity.toFixed(2) || 0.0.toFixed(2)}</div>
			<div><ValueIndicator value={props.category.balance} /></div>
		</div>
	)

}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		setCategoryBudgeted: (categoryName: string, value: number) => {
			dispatch(setMonthBudgetedAction(categoryName, value));
		}
	}

}

export default connect(null, mapDispatchToProps)(BudgetCategoryRow);
