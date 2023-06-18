import EthProvider from "../contexts/EthContext/EthProvider";
import { Provider, createDispatchHook } from 'react-redux';
import store from '../store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './App.scss';
import MyDrawer from "../components/Drawer";
import React, { createContext } from "react";

function App() {
  const Stack = createNativeStackNavigator();

  const context = React.createContext(null);
  //@ts-ignore
  const dispatchNew = createDispatchHook(context);
  // useEffect(() => {

  // });

  return (
    <Provider store={store}>
      <EthProvider>
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
      </EthProvider>
    </Provider>
  );
}

export default App;