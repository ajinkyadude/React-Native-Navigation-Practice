/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import Feed from './Screens/Feed';
import Article from './Screens/Article';
import {NavigationContainer} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import DemoStart from './Argon/DemoStart';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Argon/Screens/Home/Home';
import DrawerNavigator from './Argon/Screens/DrawerNavigator/DrawerNavigator';
// import { useDispatch, useSelector } from 'react-redux';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {width, height} = useWindowDimensions();
  // const dispatch = useDispatch();
  const [tabIndex, setTabIndex] = useState(0);
  const drawerNavigation = useRef(null);

  const Stack = createNativeStackNavigator();

  const tabsData = [
    {
      name: 'Feed',
      route: 'Feed',
    },
    {
      name: 'Setting',
      route: 'SettingsScreen',
    },
  ];

  React.useEffect(() => {
    if (tabIndex < 0) {
      return;
    }
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{name: tabsData[tabIndex].route}],
    });
    // drawerNavigation.current.dispatch(resetAction)
  }, [tabIndex]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={DemoStart} options={{headerShown: false}} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{headerShown: false}} />
      </Stack.Navigator>
      {/* <DemoStart /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
