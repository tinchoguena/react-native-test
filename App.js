import React from 'react';
import { Provider } from 'react-redux';

import PhotoApp from './src/components';
import configureStore from './store';
const store = configureStore();

export default function App() {
  return (
      <Provider store={store}>
        <PhotoApp />
      </Provider>);
}
