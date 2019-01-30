import React, { PureComponent } from 'react'

import './budgetheader.scss';
export default class BudgetHeader extends PureComponent {
  render() {
    return (
      <div className="budget-header">
        <div className="month-control">Jan</div>
        <div className="month-summary">stuff</div>
        <div className="age-of-money">40 years</div>
      </div>
    )
  }
}
