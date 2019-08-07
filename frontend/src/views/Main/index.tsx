import React from 'react'

import './main.scss';
import { connect } from 'react-redux';
import Budget from '../Budget';
import { RootState } from '../../reducers';
import Accounts from '../Accounts';
import Sidebar from '../Sidebar';
import { Route, Redirect } from 'react-router-dom';

interface Props extends ReturnType<typeof mapStateToProps> {}

const Main: React.FC<Props> = ({authed}) => {
	return (
		<div className="main">
			{!authed ? <Redirect to="/login"/> : (
				<>
					<Sidebar />
					<Route exact path="/app/" component={() => <Redirect to='/app/budget'/>} />
					<Route path="/app/budget" component={Budget} />
					<Route path="/app/accounts" component={Accounts} />
				</>
			)}
		</div>
	)
}

function mapStateToProps(state: RootState) {
	return {
		authed: state.user.authed
	}
}

export default connect(mapStateToProps)(Main);