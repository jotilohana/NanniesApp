import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import FAQ from './FAQ';

const Drawer = createDrawerNavigator();

const MyDrawer=()=> {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={FAQ} />
      <Drawer.Screen name="Feed" component={FAQ} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;