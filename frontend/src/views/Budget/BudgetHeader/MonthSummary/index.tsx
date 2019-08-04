import './month-summary.scss';
import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../../reducers';
import ValueIndicator from '../../../../components/ValueIndicator';

interface Props extends ReturnType<typeof mapStateToProps> {}

const MonthSummary: React.FC<Props> = ({toBeBudgeted, ...props}) => {
	return (
		<div className="month-summary">
			<div className="to-be-budgeted">
				<ValueIndicator
					large
					value={toBeBudgeted}
					label="To Be Budgeted"
				/>
			</div>
			<div> I'm a placeholder</div>
		</div>
	)
}

function mapStateToProps(state: RootState) {
	return {
		toBeBudgeted: state.budget.months[state.budget.activeMonth].toBeBudgeted
	}
}

export default connect(mapStateToProps)(MonthSummary)
