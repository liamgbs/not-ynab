import './month-control.scss';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../../reducers';
import { Dispatch } from 'redux';
import { Month } from '../../../../types/categories';
import { nextMonthAction, prevMonthAction } from '../../../../actions/budget';

interface Props {
	activeMonth: Month,
	activeMonthIndex: number
}

interface Actions {
	nextMonth: () => void,
	previousMonth: () => void
}

class MonthControl extends PureComponent<Props & Actions> {
	render() {
		return (
			<div className="month-control">
				<button disabled={this.props.activeMonthIndex < 1} onClick={this.props.previousMonth}>&lt;</button>
				<div className="month-name">{this.formatMonth(this.props.activeMonth.monthName)}</div>
				<button onClick={this.props.nextMonth}>&gt;</button>
			</div>
		)
	}
	formatMonth(month: string) {
		return (month.slice(0, 3) + " " + month.slice(3)).toUpperCase();
	}
}

function mapStateToProps(state: RootState) {
	return {
		activeMonth: state.budget.months[state.budget.activeMonth],
		activeMonthIndex: state.budget.activeMonth
	}
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		nextMonth: () => dispatch(nextMonthAction()),
		previousMonth: () => dispatch(prevMonthAction())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthControl)
