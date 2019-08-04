import React from 'react'

import './index.scss';
import Sidebar from '../Sidebar';
import Main from '../Main';

const Index: React.FC<{}> = () => {
	return (
		<div id="index">
		  <Sidebar />
		  <Main />
		</div>
	  )
}

export default Index;
