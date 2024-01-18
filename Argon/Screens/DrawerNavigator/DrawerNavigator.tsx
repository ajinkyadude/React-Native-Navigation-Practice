import {Image, Text, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Home from '../Home/Home';
import {BlueLogo} from '../../Assets';
const Drawer = createDrawerNavigator();

const DrawerCustom = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{marginLeft: 25}}>
        <Image
          source={BlueLogo}
          style={{width: 130, height: 130}}
          resizeMode="contain"
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerCustom {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
