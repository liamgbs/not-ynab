import './budget-category-group-row.scss';
import React, { PureComponent } from 'react';
import { CategoryGroup } from '../../types/categories';
import TriggeredPopover from '../TriggeredPopover';

interface Props {
	categoryGroup: CategoryGroup,
	totalBudgeted: number,
	totalActivity: number,
	totalBalance: number
}

interface Actions {
	addCategory: (groupName: string, categoryName: string) => void
}

export default class BudgetCategoryGroupRow extends PureComponent<Props & Actions> {
	state={
		newCategoryName: ""
	}
	onNewNameChange(event: any) {
		this.setState({
			newCategoryName: event.target.value
		});
	}
	onAddCategoryClick() {
		this.props.addCategory(
			this.props.categoryGroup.groupName,
			this.state.newCategoryName
		)
	}
	render() {
		return (
			<div className="budget-category-group-row">
				<div className="budget-category-group-row-name">
					<span>{this.props.categoryGroup.groupName}</span>
					<span className="add-button">
						<TriggeredPopover okAction={this.onAddCategoryClick.bind(this)} trigger={<span>+</span>}>
							<input onChange={this.onNewNameChange.bind(this)} />
						</TriggeredPopover>
					</span>
				</div>
				<div>{this.props.totalBudgeted.toFixed(2)}</div>
				<div>{this.props.totalActivity.toFixed(2)}</div>
				<div>{this.props.totalBalance.toFixed(2)}</div>
			</div>
		)
	}
}
