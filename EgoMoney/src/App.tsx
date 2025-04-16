/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
if (__DEV__) {
  require('./ReactotronConfig');
}
import React from 'react';
import { Navigation } from './navigation';
import { Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store';
import { ActivityIndicator } from 'react-native';


function App(): React.JSX.Element {

  const { persistor, store } = configureStore();

  return (
    <Provider store={store}>
    <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
    <Navigation/>
    </PersistGate>
    </Provider>
  );
}

export default App;
