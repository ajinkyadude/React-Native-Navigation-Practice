import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SplashScreen} from '../../Assets';
import Styles from './AccountStyle';
import Constant from '../../Common/Constant';

const AccountScreen = ({navigation}: any) => {
    const backHandler = () => {
        navigation.goBack();
    }
  return (
    <ImageBackground
      source={SplashScreen}
      style={Styles.mainConatainer}>
      <SafeAreaView>
        <View style={Styles.headerContainer}>
          <View
            style={Styles.headerFirstSection}>
            <TouchableOpacity onPress={backHandler}>
              <Icon2 name={Constant.backLogo} size={30} color={'#fff'} />
            </TouchableOpacity>
            <Text style={Styles.headerTitleStyle}>
              Create Account
            </Text>
          </View>
          <View
            style={{
              width: '50%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <Icon
              name={'bell-badge'}
              color={'#fff'}
              size={21}
              style={{marginRight: 20}}
            />
            <Icon
              name={'shopping'}
              color={'#fff'}
              size={21}
              style={{marginRight: 20}}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AccountScreen;
