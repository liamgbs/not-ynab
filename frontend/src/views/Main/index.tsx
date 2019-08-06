import React from 'react'

import './main.scss';
import { connect } from 'react-redux';
import Budget from '../Budget';
import { RootState } from '../../reducers';
import { AppView } from '../../types/app';
import Accounts from '../Accounts';

interface Props extends ReturnType<typeof mapStateToProps> {}

const Main: React.FC<Props> = ({view}) => {
	return (
		<div className="main">
			{(() => {
				switch (view) {
					case AppView.Budget:
						return <Budget />
					case AppView.Accounts:
						return <Accounts />
				}
			})()}
		</div>
	)
}

function mapStateToProps(state: RootState) {
	return {
		view: state.app.view,
	}
}

export default connect(mapStateToProps)(Main);