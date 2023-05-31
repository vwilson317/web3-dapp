import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, AppRegistry } from 'react-native';
import MatchingView from './components/MatchingView';
import SearchView from './components/SearchView';
import EthProvider from "./contexts/EthContext/EthProvider";
// import styles from './components/styles/MatchingView.module.scss';
import Match from './interfaces/Match';
import User from './interfaces/User';
import { Provider } from 'react-redux';
import store from './store';
// import { NativeRouter, Route, Link } from 'react-router-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import MyDrawer from './components/Drawer';
import { registerRootComponent } from 'expo';

function App() {
  const Stack = createNativeStackNavigator();

  // useEffect(() => {

  // });

  return (
    <NavigationContainer>
      <Provider store={store}>
        <EthProvider>
          <MyDrawer />
          {/* <View style={styles.container}>
            {/* <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={MatchingView}
                options={{ title: 'Welcome' }}
              />
              <Stack.Screen name="Search" component={SearchView} />
            </Stack.Navigator> 
          </View> */}
          {/* <Route path="/" component={() => MatchingView} />
        <Route path="/Search" component={() => SearchView} /> */}
        </EthProvider>
      </Provider>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
});

// AppRegistry.registerComponent('App', () => App);

export default App;