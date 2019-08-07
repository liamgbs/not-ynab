import React from 'react'

import './main.scss';
import { connect } from 'react-redux';
import Budget from '../Budget';
import { RootState } from '../../reducers';
import Accounts from '../Accounts';
import Sidebar from '../Sidebar';
import { Route, Redirect, match } from 'react-router-dom';

interface Props extends ReturnType<typeof mapStateToProps> {
	match: match<any>
}

const Main: React.FC<Props> = ({authed, match}) => {
	return (
		<div className="main">
			{ /*!authed*/ false ? <Redirect to="/login"/> : (
				<>
					<Sidebar />
					<Route exact path={match.path} component={() => <Redirect to={`${match.path}/budget`}/>} />
					<Route path={`${match.path}/budget`} component={Budget} />
					<Route path={`${match.path}/accounts`} component={Accounts} />
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