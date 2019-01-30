import React, { PureComponent } from 'react'

import './header.scss';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { AppView } from '../../reducers/app';
import BudgetHeader from './BudgetHeader';

interface Props {
    view: AppView
}

class Header extends PureComponent<Props> {
  render() {
    return (
      <div className="header">
        {(() => {

            switch (this.props.view) {
                case AppView.Budget:
                    return <BudgetHeader />
            }

        })()}
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
    return {
        view: state.app.view
    }
}

export default connect(mapStateToProps) (Header);
