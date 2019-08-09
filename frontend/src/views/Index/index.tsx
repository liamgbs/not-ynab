import React from 'react'

import './index.scss';
import Main from '../Main';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import Login from '../Login';
import { Route, Switch} from "react-router-dom";
import SignUp from '../SignUp';

interface Props extends ReturnType<typeof mapStateToProps> {

}

const Index: React.FC<Props> = ({ authed }) => {
	return (
		<div id="index">
			<Switch>
				<Route exact path="/" component={() => <div>This is the site wooo</div>} />
				<Route path="/app" component={Main} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={SignUp} />
				<Route component={() => <div>This is a dodgy path m8</div>} />
			</Switch>
		</div>
	)
}

function mapStateToProps(state: RootState) {
	return {
		authed: state.user.authed,
	}
}

export default connect(mapStateToProps)(Index);
