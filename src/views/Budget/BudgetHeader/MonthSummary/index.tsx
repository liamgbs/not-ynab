import './month-summary.scss';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../../reducers';

interface Props {
	toBeBudgeted: number
}

class MonthSummary extends PureComponent<Props> {
  render() {
	return (
	  <div>
		{this.props.toBeBudgeted}
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
