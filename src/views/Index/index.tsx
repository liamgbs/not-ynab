import React, { Component } from 'react'

import './index.scss';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Main from '../Main';

export default class Index extends Component {
  render() {
    return (
      <div id="index">
        <Header />
        <Sidebar />
        <Main />
      </div>
    )
  }
}
