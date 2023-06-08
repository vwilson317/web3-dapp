import { StyleSheet, View, Text, AppRegistry } from 'react-native';
import EthProvider from "../contexts/EthContext/EthProvider";
import { Provider } from 'react-redux';
import store from '../store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import 'react-native-gesture-handler';
import MatchingView from '../components/MatchingView';
import SearchView from '../components/SearchView';
import styles from './App.scss';
import MyDrawer from '../components/Drawer';

function App() {
  const Stack = createNativeStackNavigator();

  // useEffect(() => {

  // });

  return (
    <Provider store={store}>
      <EthProvider>
        <NavigationContainer>
          {/* <View className={styles.container}> */}
            <MyDrawer className={styles.container}/>
            {/* // <MatchingView />
          // <SearchView /> */}
            {/* <Stack.Navigator>
              <Stack.Screen name="Home" component={MatchingView} />
              <Stack.Screen name="Search" component={SearchView} />
            </Stack.Navigator> */}
          {/* </View> */}
        </NavigationContainer>
      </EthProvider>
    </Provider>
  );
}

export default App;