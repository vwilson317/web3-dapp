import { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MatchingView from './Matching/MatchingView';
import SearchView from './Search/SearchView';
//@ts-ignore
import styles from '../src/styles/Global.scss';
import Header from './Header';
import LandingScreen from './LandingScreen';
import MyMatchesScreen from './MyMatches/MyMatchesScreen';
import { useAppSelector } from '../hooks';
import { isLoggedin } from '../features/userSlice';
//@ts-ignore
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import ViewProfileScreen from './Profile/ViewProfileScreen';
import CreateAccountScreen from './Account/CreateAccountScreen';

const Drawer = createDrawerNavigator();

export enum ScreenType {
  Landing = 'Landing',
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
    Landing: LandingScreen
  });
  const navigation = useNavigation();

  useEffect(() => {
    getScreens().then(() =>{
      if(isLoggedIn){
        navigation.navigate('MyMatches');
      }
    })
  }, [isLoggedIn]);

  const getScreens = async () => {
    if (!isLoggedIn) {
      setSreens({
        Landing: LandingScreen,
        CreateAccount: CreateAccountScreen
      })
    } else{
      setSreens({
          MyMatches: MyMatchesScreen,
          Matching: MatchingView,
          Search: SearchView,
          ViewProfile: ViewProfileScreen
        })
    }};

    return (
      <Drawer.Navigator initialRouteName="Landing"
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