import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import Index from './views/Index';


class App extends Component {
  render() {
    return (
      <div>
        <Provider store={configureStore()}>
          <Index />
        </Provider>
      </div>
    );
  }
}

export default App;
