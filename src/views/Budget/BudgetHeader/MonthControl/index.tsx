import './month-control.scss';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../../reducers';

interface Props {
	activeMonth: string
}

class MonthControl extends PureComponent<Props> {
	render() {
		return (
			<div className="month-control">
				<button>&lt;</button>
				<div className="month-name">{this.formatMonth(this.props.activeMonth)}</div>
				<button>&gt;</button>
			</div>
		)
	}
	formatMonth(month: string) {
		return (month.slice(0, 3) + " " + month.slice(3)).toUpperCase();
	}
}

const mapStateToProps = (state: RootState) => {
	return {
		activeMonth: state.app.budget.activeMonth
	}
}

export default connect(mapStateToProps)(MonthControl)
