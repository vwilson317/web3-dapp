import {useEffect} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MatchingView from './Matching/MatchingView';
import SearchView from './Search/SearchView';
//@ts-ignore
import styles from '../src/styles/Global.scss';
import Header from './Header';
import HomeScreen from './Home';
import MyMatchesScreen from './MyMatches/MyMatchesScreen';
import { useSelector } from 'react-redux';
import { isLoggedin } from '../features/userSlice';
//@ts-ignore
import _ from 'lodash';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const isLoggedIn: boolean = useSelector(isLoggedin);

  // useEffect(() => {
  //   debugger
  //   const x = isLoggedIn;
  // }, [isLoggedIn]);

  const drawerScreens = isLoggedIn
    ? {
        Home: HomeScreen,
        Matching: MatchingView,
        Search: SearchView,
        MyMatches: MyMatchesScreen,
      }
    : {
        Home: HomeScreen,
      };

  return (
    <Drawer.Navigator initialRouteName="Home"
    screenOptions={({ navigation }) => ({
      headerRight: () => (
        <Header />
      )})}
    >
      {_.map(drawerScreens, (Screen: JSX.Element, name: string) => (
        <Drawer.Screen key={name} name={name} component={Screen} />
      ))}
    </Drawer.Navigator>
  );
}

export default MyDrawer;