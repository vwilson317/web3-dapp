import EthProvider from "../contexts/EthContext/EthProvider";
import { Provider, createDispatchHook } from 'react-redux';
import store from '../store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyDrawer from "../components/Drawer";
import React, { createContext } from "react";
// import { GlobalScss } from "../styles/Global.scss";
import ThemeProviderCustom from "../components/ThemeProvider";
import CreateAccountScreen from "../components/Account/CreateAccountScreen";

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ThemeProviderCustom>
      <Provider store={store}>
        <EthProvider>
          <NavigationContainer>
          <Stack.Navigator initialRouteName="Drawer">
              <Stack.Screen name="Drawer" component={MyDrawer} options={{headerShown: false}}/>
              <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </EthProvider>
      </Provider>
    </ThemeProviderCustom>
  );
}

export default App;