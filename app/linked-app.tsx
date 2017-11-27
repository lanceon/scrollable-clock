import * as React from 'react';
import { Provider } from 'react-redux';
import Root from './components/app';
import configureStore from './configureStore';

const store = configureStore();

const LinkedApp = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default LinkedApp;
