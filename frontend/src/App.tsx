import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import Index from './views/Index';

import Amplify from 'aws-amplify';

// TODO: Regenerate IDs and hide when in prod
Amplify.configure({
    Auth: {        
        region: 'eu-west-2',
        userPoolId: 'eu-west-2_khK7YQt1b',
        userPoolWebClientId: '13ic2uaalvm50tpbahe3gug3ot',
    }
});

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
