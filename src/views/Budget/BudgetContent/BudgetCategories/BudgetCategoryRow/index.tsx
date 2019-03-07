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
	state = {
		budgeted: this.props.category.budgeted.toFixed(2)
	}

	componentWillReceiveProps(props: Props) {
		this.setState({
			budgeted: props.category.budgeted.toFixed(2)
		});
	}

	handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({
			budgeted: event.target.value
		});
	}
	handleBlur(value: number) {
		if (value === value) {
			this.props.setCategoryBudgeted(this.props.category.categoryName, value);
			this.setState({
				budgeted: value.toFixed(2)
			});
		} else {
			this.setState({
				budgeted: this.props.category.budgeted.toFixed(2)
			});
		}
		
	}
	render() {
		return (
			<div className="budget-category-row">
				<div className="budget-category-row-name">
					{this.props.category.categoryName}
				</div>
				<CalculatorInput
					hoverable
					value={this.state.budgeted}
					onChange={this.handleChange.bind(this)}
					onBlur={this.handleBlur.bind(this)}
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
