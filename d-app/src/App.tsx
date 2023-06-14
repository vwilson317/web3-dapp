import EthProvider from "../contexts/EthContext/EthProvider";
import { Provider } from 'react-redux';
import store from '../store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './App.scss';
import MyDrawer from "../components/Drawer";

function App() {
  const Stack = createNativeStackNavigator();

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