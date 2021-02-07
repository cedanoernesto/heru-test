import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import MapboxGL from "@react-native-mapbox-gl/maps";
// redux store
import store from './src/redux';
import { mapboxAccessToken } from './src/config/index';
import RootStack from './src/navigation/RootStack';
import SplashScreen from 'react-native-splash-screen';
// @ts-ignore
console.disableYellowBox = true;
// setting token for Mapbox
MapboxGL.setAccessToken(mapboxAccessToken);
const App: () => any = () => {
  useEffect(() => {
    SplashScreen.hide();

  })
  return (
    <Provider store={store}>
     <RootStack/>
  </Provider>
  );
};

export default App;
