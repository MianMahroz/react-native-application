import {AppRegistry, StatusBar} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App.js';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import RootReducer from './src/reducers/RootReducer.js';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import {Root} from 'native-base';
const client = axios.create({
  baseURL: 'http://10.14.9.157:8082',
  responseType: 'json',
});

const store = createStore(
  RootReducer,
  applyMiddleware(axiosMiddleware(client)),
);

const RNRedux = () => (
  <Provider store={store}>
    <Root>
      <App />
    </Root>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
