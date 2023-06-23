import { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MatchingView from './Matching/MatchingView';
import SearchView from './Search/SearchView';
//@ts-ignore
import styles from '../src/styles/Global.scss';
import Header from './Header';
import HomeScreen from './Home';
import MyMatchesScreen from './MyMatches/MyMatchesScreen';
import { useAppSelector } from '../hooks';
import { isLoggedin } from '../features/userSlice';
//@ts-ignore
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { useNavigationState } from '@react-navigation/native';
import ViewProfileScreen from './Profile/ViewProfileScreen';
import CreateAccountScreen from './Account/CreateAccountScreen';

const Drawer = createDrawerNavigator();

export enum ScreenType {
  Home = 'Home',
  Matching = 'Matching',
  Search = 'Search',
  MyMatches = 'MyMatches',
  CreateAccount = 'CreateAccount',
  ViewProfile = "ViewProfile"
}

function MyDrawer() {
  const isLoggedIn: boolean = useSelector(isLoggedin);
  // const currentScreen: ScreenType = useSelector(getCurrentScreens);
  const [sreens, setSreens] = useState<object>({
    Home: HomeScreen
  });

  useEffect(() => {

    //@ts-ignore
    // if (currentScreens) {
    //   setSreens(currentScreens);
    // }
    getScreens();

  }, [isLoggedIn]);

  const getScreens = () => {
    if (!isLoggedIn) {
      setSreens({
        Home: HomeScreen,
        CreateAccount: CreateAccountScreen
      })
    } else{
      setSreens({
          MyMatches: MyMatchesScreen,
          Home: HomeScreen,
          Matching: MatchingView,
          Search: SearchView,
          ViewProfile: ViewProfileScreen
        })
    }};

    return (
      <Drawer.Navigator initialRouteName="Home"
        screenOptions={({ navigation }) => ({
          headerRight: () => (
            <Header />
          )
        })}
      >
        {_.map(sreens, (screen: JSX.Element, name: string) => (
        <Drawer.Screen key={name} name={name} component={screen} />
      ))}
      </Drawer.Navigator>
    );
  }

  export default MyDrawer;