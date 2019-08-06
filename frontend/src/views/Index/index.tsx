import React from 'react'

import './index.scss';
import Sidebar from '../Sidebar';
import Main from '../Main';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import Login from '../Login';

interface Props extends ReturnType<typeof mapStateToProps> {}

const Index: React.FC<Props> = ({ authed }) => {
	return (
		<div id="index">
			{authed ? (
				<>
					<Sidebar />
					<Main />
				</>
			) : <Login />}
		</div>
	)
}

function mapStateToProps(state: RootState) {
	return {
		authed: state.user.authed,
	}
}

export default connect(mapStateToProps)(Index);
