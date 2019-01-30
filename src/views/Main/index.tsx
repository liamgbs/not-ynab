import React, { PureComponent } from 'react'

import './main.scss';
import { connect } from 'react-redux';
import { AppView } from '../../reducers/app';
import Budget from '../Budget';
import { RootState } from '../../reducers';

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

const mapStateToProps = (state: RootState) => {
    return {
        view: state.app.view
    }
}

export default connect(mapStateToProps) (Main);