import React from 'react'

import './index.scss';
import Sidebar from '../Sidebar';
import Main from '../Main';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import Login from '../Login';
import { Route} from "react-router-dom";

interface Props extends ReturnType<typeof mapStateToProps> {

}

const Index: React.FC<Props> = ({ authed }) => {
	return (
		<div id="index">
			<Route exact path="/" component={() => <div>This is the site wooo</div>} />
			<Route path="/app" component={() => <Main />} />
			<Route path="/login" component={Login} />
			<Route path="/signup" component={() => <div>I dont exist yet :(</div>} />
		</div>
	)
}

function mapStateToProps(state: RootState) {
	return {
		authed: state.user.authed,
	}
}

export default connect(mapStateToProps)(Index);
