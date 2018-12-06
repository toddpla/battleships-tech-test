import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import logo from './logo.svg';
import configureStore from './store/configureStore'
import './App.css';
import AppRouter from './routers/AppRouter'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
