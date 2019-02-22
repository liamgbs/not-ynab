import './budget-content.scss';
import React, { PureComponent } from 'react';
import BudgetCategories from './BudgetCategories';
import BudgetSidebar from './BudgetSidebar';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TriggeredPopover from '../../../components/TriggeredPopover';
import Button from '../../../components/Button';
import { addCategoryGroupAction } from '../../../actions/budget';
import Input from '../../../components/Input';

interface Props {

}

interface Actions {
	addCategoryGroup: (groupName: string) => void
}

class BudgetContent extends PureComponent<Props & Actions> {
	state={
		newCategoryName: ""
	}
	handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({
			newCategoryName: event.target.value
		})
	}
	render() {
		return (
			<div className="budget-content">
				<div className="budget-category-toolbar">
					<TriggeredPopover
						okAction={() => this.props.addCategoryGroup(this.state.newCategoryName)}
						trigger={<Button small >Add Category</Button>}>
					
					<Input placeholder="New Category Group" value={this.state.newCategoryName} onChange={this.handleChange.bind(this)} />
					</TriggeredPopover>
				</div>
				<div className="budget-category-controls">
					<BudgetCategories />
					<BudgetSidebar />
				</div>

			</div>
		)
	}
}

function mapDispatchToProps(dispatch : Dispatch) {
	return {
		addCategoryGroup: (groupName: string) => {
			dispatch(addCategoryGroupAction(groupName));
		}
	}
}

export default connect(null, mapDispatchToProps)(BudgetContent)