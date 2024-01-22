import {Image, Text, TouchableOpacity, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Home from '../Home/Home';
import {BlueLogo} from '../../Assets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeIcon from 'react-native-vector-icons/Ionicons';
import AccountNavigator from '../Account/Account';
import AccountScreen from '../Account/AccountScreen';
import Profile from '../Profile/Profile';
import Component from '../Component/Component';
const Drawer = createDrawerNavigator();

const DrawerCustom = (props: any) => {
  const {navigation} = props && props;
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          marginLeft: 25,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          source={BlueLogo}
          style={{width: 130, height: 130}}
          resizeMode="contain"
        />
        <TouchableOpacity
          onPress={() => navigation.closeDrawer()}
          style={{marginRight: 25}}>
          <Icon name={'menu'} color={'black'} size={30} />
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerCustom {...props} />}
      screenOptions={{
        drawerLabelStyle: {fontWeight: 'bold', fontSize: 15, marginLeft: -10},
        drawerActiveBackgroundColor: '#5E72E4',
        drawerActiveTintColor: 'white',
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({color}) => {
            return (
              <HomeIcon
                name={'home-outline'}
                size={25}
                color={color}
                style={{marginLeft: 10}}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => {
            return (
              <HomeIcon
                name={'calendar-outline'}
                size={25}
                color={color}
                style={{marginLeft: 10}}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => {
            return (
              <Icon
                name="chart-pie"
                color={color}
                size={25}
                style={{marginLeft: 10}}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Component"
        component={Component}
        options={{
          // headerShown: false,
          drawerIcon: ({color}) => {
            return (
              <Icon
                name="rocket-launch"
                color={color}
                size={25}
                style={{marginLeft: 10}}
              />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
