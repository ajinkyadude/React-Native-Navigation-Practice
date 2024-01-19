import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SplashScreen, Google} from '../../Assets';
import Styles from './AccountStyle';
import Constant from '../../Common/Constant';

const AccountScreen = ({navigation}: any) => {
  const backHandler = () => {
    navigation.goBack();
  };
  return (
    <ImageBackground source={SplashScreen} style={Styles.mainConatainer}>
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          width: '100%',
          height: '100%',
        }}>
        <SafeAreaView>
          <View style={Styles.headerContainer}>
            <View style={Styles.headerFirstSection}>
              <TouchableOpacity onPress={backHandler}>
                <Icon2 name={Constant.backLogo} size={30} color={'#fff'} />
              </TouchableOpacity>
              <Text style={Styles.headerTitleStyle}>
                {Constant.accountCreate}
              </Text>
            </View>
            <View style={Styles.headerSecondSection}>
              <Icon
                name={Constant.bellIcon}
                color={'#fff'}
                size={21}
                style={Styles.iconStyle}
              />
              <Icon
                name={Constant.shoppingIcon}
                color={'#fff'}
                size={21}
                style={Styles.iconStyle}
              />
            </View>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View
              style={{
                backgroundColor: '#F4F5F7',
                width: '90%',
                height: '90%',
                borderRadius: 8,
                marginTop: 20,
              }}>
              <View style={{backgroundColor: '#FFFFFF'}}>
                <View style={{alignItems: 'center', marginTop: 30}}>
                  <Text style={{color: '#ADB5BD', fontSize: 15}}>
                    Sign up with
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginTop: 30,
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      width: '40%',
                      shadowColor: 'black',
                      shadowOffset: {width: 10, height: 10},
                      shadowOpacity: 0.2,
                      shadowRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingVertical: 13,
                      backgroundColor: '#FFFFFF',
                      borderRadius: 5,
                    }}>
                    <Icon name="github" size={21} color={'black'} />
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: '#5E72E4',
                        marginLeft: 10,
                      }}>
                      GITHUB
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      //   padding: 20,
                      width: '40%',
                      shadowColor: 'black',
                      shadowOffset: {width: 10, height: 10},
                      shadowOpacity: 0.2,
                      shadowRadius: 10,
                      backgroundColor: '#FFFFFF',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 5,
                    }}>
                    {/* <Icon name="github" size={21} color={'black'} /> */}
                    <Image source={Google} style={{width: 21, height: 21}} />
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: '#5E72E4',
                        marginLeft: 10,
                      }}>
                      GITHUB
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default AccountScreen;
