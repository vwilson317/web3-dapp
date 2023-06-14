import { createDrawerNavigator } from '@react-navigation/drawer';
import MatchingView from './MatchingView';
import SearchView from './SearchView';
import styles from '../src/styles/Global.scss';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen className={styles.container} name="Matching" component={MatchingView} />
        <Drawer.Screen className={styles.container} name="Search" component={SearchView} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;