import React from 'react';
import {
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';

//Navigation
import Router from './src/navigation';

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <Router/>
      </Provider>
      )
  }
}

export default App;
