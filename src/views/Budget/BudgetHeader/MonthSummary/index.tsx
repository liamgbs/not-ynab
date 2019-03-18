import './month-summary.scss';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../../reducers';
import ValueIndicator from '../../../../components/ValueIndicator';

interface Props {
	toBeBudgeted: number
}

class MonthSummary extends PureComponent<Props> {
	render() {
		return (
			<div className="month-summary">
				<div className="to-be-budgeted">
					<ValueIndicator
						large
						value={this.props.toBeBudgeted}
						label="To Be Budgeted"
					/>
				</div>
				<div> I'm a placeholder</div>
			</div>
		)
	}
}

function mapStateToProps(state: RootState) {
	return {
		toBeBudgeted: state.budget.months[state.budget.activeMonth].toBeBudgeted
	}
}

export default connect(mapStateToProps)(MonthSummary)
