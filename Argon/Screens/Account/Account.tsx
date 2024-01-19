import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from './AccountScreen';

const AccountNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={"AccountScreen"} component={AccountScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
