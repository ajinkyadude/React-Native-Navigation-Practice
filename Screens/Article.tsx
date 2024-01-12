import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import { lazy } from 'react';

const Tab = createMaterialTopTabNavigator();

const Article = () => {
  return (
    <Tab.Navigator screenOptions={{ lazy: true }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default Article;
