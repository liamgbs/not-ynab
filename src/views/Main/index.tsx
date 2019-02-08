import React, { PureComponent } from 'react'

import './main.scss';
import { connect } from 'react-redux';
import Budget from '../Budget';
import { RootState } from '../../reducers';
import { AppView } from '../../types/app';

interface Props {
    view: AppView
}


class Main extends PureComponent<Props> {
  render() {
    return (
      <div className="main">
        {(() => {

            switch (this.props.view) {
                case AppView.Budget:
                    return <Budget />
            }

        })()}
      </div>
    )
  }
}

function mapStateToProps(state: RootState) {
    return {
        view: state.app.view
    }
}

export default connect(mapStateToProps) (Main);