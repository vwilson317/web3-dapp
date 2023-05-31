import { createDrawerNavigator } from '@react-navigation/drawer';
import MatchingView from './MatchingView';
import SearchView from './SearchView';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen name="Matching" component={MatchingView} /> */}
      <Drawer.Screen name="Search" component={SearchView} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;