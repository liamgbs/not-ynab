import './budget-category-group-row.scss';
import React, { PureComponent } from 'react';
import TriggeredPopover from '../../../../../components/TriggeredPopover';
import Button from '../../../../../components/Button';
import { CategoryGroup } from '../../../../../types/categories';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addCategoryAction } from '../../../../../actions/budget';
import Input from '../../../../../components/Input';

interface Props {
	categoryGroup: CategoryGroup,
	totalBudgeted: number,
	totalActivity: number,
	totalBalance: number
}

interface Actions {
	addCategory: (groupName: string, categoryName: string) => void
}

class BudgetCategoryGroupRow extends PureComponent<Props & Actions> {
	state={
		showAddButton: false,
		newCategoryName: ""
	}
	onNewNameChange(event: React.ChangeEvent<HTMLInputElement>) {
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
								<Input value={this.state.newCategoryName} placeholder="Add Category..." onChange={this.onNewNameChange.bind(this)}/>
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

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		addCategory: (groupName: string, categoryName: string) => {
			dispatch(addCategoryAction(groupName, categoryName))
		}
	}

}

export default connect(null, mapDispatchToProps)(BudgetCategoryGroupRow)
