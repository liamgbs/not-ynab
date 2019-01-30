import React, { PureComponent } from 'react';
import './budget.scss';
import BudgetHeader from './BudgetHeader';
export default class Budget extends PureComponent {
  render() {
    return (
      <div className="budget">
        <BudgetHeader />
        <div className="content">
        content
        </div>
      </div>
    )
  }
}
