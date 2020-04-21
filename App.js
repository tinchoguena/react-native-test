import React from 'react';
import { Provider } from 'react-redux';

import PhotoApp from './src/components';
import configureStore from './store';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const store = configureStore();

export default function App() {
  let [fontsLoaded] = useFonts({
    'SFProDisplay-Bolt': require('./assets/fonts/SFProDisplay-Bold.ttf'),
    'SFProDisplay-Light': require('./assets/fonts/SFProDisplay-Light.ttf'),
  });
  if (!fontsLoaded){
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <PhotoApp />
      </Provider>);
  }
  
}
