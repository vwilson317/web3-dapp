import EthProvider from "../contexts/EthContext/EthProvider";
import { Provider, createDispatchHook } from 'react-redux';
import store from '../store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './App.scss';
import MyDrawer from "../components/Drawer";
import React, { createContext } from "react";
// import { GlobalScss } from "../styles/Global.scss";
import ThemeProviderCustom from "../components/ThemeProvider";

function App() {

  return (
    <ThemeProviderCustom>
      <Provider store={store}>
        <EthProvider>
          <NavigationContainer>
            {/* <GlobalScss /> */}
            <MyDrawer />
          </NavigationContainer>
        </EthProvider>
      </Provider>
    </ThemeProviderCustom>
  );
}

export default App;