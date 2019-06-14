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

const MonthControl: React.FC<Props & Actions> = ({activeMonth, activeMonthIndex, ...props}) => {
	const formatMonth = (month: string) => {
		return month.length === 8 ? month : (month.slice(0, 3) + " " + month.slice(3)).toUpperCase();
	}

	return (
		<div className="month-control">
			<button disabled={activeMonthIndex < 1} onClick={props.previousMonth}>&lt;</button>
			<div className="month-name">{formatMonth(activeMonth.monthName)}</div>
			<button onClick={props.nextMonth}>&gt;</button>
		</div>
	)
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
