import React, { Component } from 'react'

import './index.scss';
import Sidebar from '../Sidebar';
import Main from '../Main';

export default class Index extends Component {
  render() {
    return (
      <div id="index">
        <Sidebar />
        <Main />
      </div>
    )
  }
}
