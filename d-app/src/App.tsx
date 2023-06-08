import { StyleSheet, View, Text, AppRegistry } from 'react-native';
import EthProvider from "../contexts/EthContext/EthProvider";
import { Provider } from 'react-redux';
import store from '../store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import MyDrawer from '../components/Drawer';
import { registerRootComponent } from 'expo';
import MatchingView from '../components/MatchingView';
import SearchView from '../components/SearchView';
import stylesI from './App.scss';

function App() {
  const Stack = createNativeStackNavigator();

  // useEffect(() => {

  // });

  return (
    // <NavigationContainer>
      <Provider store={store}>
        <EthProvider>
          <View className={stylesI.classidk}>
          {/* <MatchingView /> */}

          <SearchView />
          {/* <Stack.Screen name="Home" component={MatchingView} />
          <Stack.Screen name="Search" component={SearchView} /> */}
          </View>
        </EthProvider>
      </Provider>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',//gray
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