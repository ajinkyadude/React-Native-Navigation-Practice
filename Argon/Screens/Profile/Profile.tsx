import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ProfileImage, SplashScreen} from '../../Assets';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Constant from '../../Common/Constant';
import Styles from './ProfileStyle';

const Profile = ({navigation}: any) => {
  const backHandler = () => {
    navigation.goBack();
  };
  return (
    <ImageBackground
      source={SplashScreen}
      style={{width: '100%', height: '70%'}}>
      <SafeAreaView>
        <View style={Styles.headerContainer}>
          <View style={Styles.headerFirstSection}>
            <TouchableOpacity
              onPress={backHandler}
              style={Styles.backHandlerStyle}>
              <Icon2 name={Constant.backLogo} size={30} color={'#fff'} />
            </TouchableOpacity>
            <Text style={Styles.headerTitleStyle}>{Constant.profileText}</Text>
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
        <View style={{alignItems: 'center'}}>
          <Image
            source={ProfileImage}
            style={{
              width: 220,
              height: 220,
              position: 'absolute',
              top: 0,
              zIndex: 1,
            }}
          />
          <View
            style={{
              backgroundColor: '#fff',
              width: '90%',
              height: '100%',
              marginTop: 100,
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <View
              style={{
                marginTop: 100,
                flexDirection: 'row',
                width: '60%',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: '#11CDEF',
                  borderRadius: 5,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  CONNECT
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: '#172B4D',
                  borderRadius: 5,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  MESSAGE
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-evenly',
                marginTop: 30,
              }}>
              <View style={{alignItems: 'center'}}>
                <Text>2k</Text>
                <Text>Friends</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text>10</Text>
                <Text>Photos</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text>89</Text>
                <Text>Comments</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Profile;
