import { createDrawerNavigator } from '@react-navigation/drawer';
import MatchingView from './MatchingView';
import SearchView from './SearchView';
import styles from '../src/styles/Global.scss';
import Header from './Header';
import HomeScreen from './HomeScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
    screenOptions={({ navigation }) => ({
      headerRight: () => (
        // <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        //   <Item
        //     title="userLogin"
        //     iconName="person"
        //     onPress={() => navigation.navigate('UserLogin')}
        //   />
        // </HeaderButtons>
        <Header />
      )})}
    >
      {/* <Drawer.Screen className={styles.container} name="Home" component={HomeScreen}
        options={{
          header: () => <Header />
        }} /> */}
      <Drawer.Screen className={styles.container} name="Matching" component={MatchingView}
        // options={{
        //   header: () => <Header />
        // }}
      />
      <Drawer.Screen className={styles.container} name="Search" component={SearchView} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;