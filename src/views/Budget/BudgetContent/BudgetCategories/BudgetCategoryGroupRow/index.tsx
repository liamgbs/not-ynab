import './budget-category-group-row.scss';
import React, { PureComponent } from 'react';
import TriggeredPopover from '../../../../../components/TriggeredPopover';
import Button from '../../../../../components/Button';
import { CategoryGroup } from '../../../../../types/categories';

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
		showAddButton: false,
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
	onMouseEnter() {
		this.setState({showAddButton: true})
	}
	onMouseLeave() {
		this.setState({showAddButton: false})
	}
	render() {
		return (
			<div className="budget-category-group-row" onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
				<div className="budget-category-group-row-name">
					<span>{this.props.categoryGroup.groupName}</span>
					{this.state.showAddButton ?
						<span className="add-button">
							<TriggeredPopover okAction={this.onAddCategoryClick.bind(this)} trigger={<Button round small>+</Button>}>
								<input placeholder="Add category..." onChange={this.onNewNameChange.bind(this)} />
							</TriggeredPopover>
						</span> : null}
				</div>
				<div>{this.props.totalBudgeted.toFixed(2)}</div>
				<div>{this.props.totalActivity.toFixed(2)}</div>
				<div>{this.props.totalBalance.toFixed(2)}</div>
			</div>
		)
	}
}
