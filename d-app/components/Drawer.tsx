import { createDrawerNavigator } from '@react-navigation/drawer';
import MatchingView from './Matching/MatchingView';
import SearchView from './Search/SearchView';
import styles from '../src/styles/Global.scss';
import Header from './Header';
import HomeScreen from './Home';
import MyMatchesScreen from './MyMatches/MyMatchesScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home"
    screenOptions={({ navigation }) => ({
      headerRight: () => (
        <Header />
      )})}
    >
      <Drawer.Screen className={styles.container} name="Home" component={HomeScreen}/>
      <Drawer.Screen className={styles.container} name="Matching" component={MatchingView} />
      <Drawer.Screen className={styles.container} name="Search" component={SearchView} />
      <Drawer.Screen className={styles.container} name="MyMatches" component={MyMatchesScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;