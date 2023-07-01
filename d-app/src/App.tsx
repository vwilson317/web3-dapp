import React, { createContext, Suspense } from "react";
import EthProvider from "./contexts/EthContext/EthProvider";
import { Provider, createDispatchHook } from 'react-redux';
import store from '../store';
import { NavigationContainer } from '@react-navigation/native';
// const NavigationContainer = React.lazy(() => import("@react-navigation/native"));
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//@ts-ignore
const MyDrawer = React.lazy(() => import("./components/Drawer"));
// import ThemeProviderCustom from "./components/ThemeProvider";
import CreateAccountScreen from "./components/Account/CreateAccountScreen";
// import ApiProvider from "../components/ApiProvider";
//@ts-ignore
const ApiProvider = React.lazy(() => import("./components/ApiProvider"));
import Loader from "./common/Loader/Loader";
// import "./nativewind-output";
// import ToastContainerWebOnly from "./common/ToastUtil";

function App() {
  const Stack = createNativeStackNavigator();

  return (
    // <ThemeProviderCustom>
    <Provider store={store}>
      <EthProvider>
        <Suspense fallback={Loader()}>
          {/** @ts-ignore */}
          <ApiProvider>
            {/* <TailwindProvider value={utilities}> */}
              {/* <ToastContainerWebOnly /> */}
              <NavigationContainer>
                <Stack.Navigator initialRouteName="Drawer">
                  <Stack.Screen name="Drawer" component={MyDrawer} options={{ headerShown: false }} />
                  <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
                </Stack.Navigator>
              </NavigationContainer>
            {/* </TailwindProvider> */}
          </ApiProvider>
        </Suspense>
      </EthProvider>
    </Provider>

    // </ThemeProviderCustom>
    // </Suspense>
  );
}

export default App;