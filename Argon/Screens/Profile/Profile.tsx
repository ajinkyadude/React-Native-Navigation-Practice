import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ProfileImage, SplashScreen} from '../../Assets';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Constant from '../../Common/Constant';
import Styles from './ProfileStyle';
import {One, Three, Two, Five, Four, Six} from '../../Assets';

const Profile = ({navigation}: any) => {
  const backHandler = () => {
    navigation.goBack();
  };
  const arr = [One, Two, Three, Four, Five, Six];
  return (
    <ScrollView>
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
              <Text style={Styles.headerTitleStyle}>
                {Constant.profileText}
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
                // height: '100%',
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
                  // justifyContent: 'space-evenly',
                  marginTop: 30,
                  // backgroundColor: 'red'
                }}>
                <View style={{alignItems: 'center', width: '33.33%'}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#525F7F',
                      fontSize: 18,
                      marginBottom: 7,
                    }}>
                    2k
                  </Text>
                  <Text style={{color: '#525F7F'}}>Friends</Text>
                </View>
                <View style={{alignItems: 'center', width: '33.33%'}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#525F7F',
                      fontSize: 18,
                      marginBottom: 7,
                    }}>
                    10
                  </Text>
                  <Text style={{color: '#525F7F'}}>Photos</Text>
                </View>
                <View style={{alignItems: 'center', width: '33.33%'}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#525F7F',
                      fontSize: 18,
                      marginBottom: 7,
                    }}>
                    89
                  </Text>
                  <Text style={{color: '#525F7F'}}>Comments</Text>
                </View>
              </View>

              <View style={{marginTop: 40, alignItems: 'center'}}>
                <Text style={{color: '#32325D', fontSize: 28}}>
                  Jessica Jones, 27
                </Text>
                <Text style={{color: '#32325D', fontSize: 16}}>
                  San Francisco, USA
                </Text>
              </View>
              <View
                style={{
                  borderColor: '#E9ECEF',
                  borderWidth: 1,
                  width: '80%',
                  marginTop: 50,
                }}
              />
              <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={{color: '#525F7F', fontSize: 16}}>
                  An artist of considerable range, jessica
                  
                </Text>
                <Text style={{color: '#525F7F', fontSize: 16}}>
                  name taken by Melbourne ...
                </Text>
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{color: '#233DD2', fontSize: 18}}>Show more</Text>
              </View>
              <View style={{width: '90%', marginTop: 20}}>
                <Text
                  style={{color: '#525F7F', fontWeight: 'bold', fontSize: 16}}>
                  Album
                </Text>
                <Text
                  style={{
                    color: '#5E72E4',
                    alignSelf: 'flex-end',
                    marginTop: 20,
                  }}>
                  View all
                </Text>
              </View>

              <View style={{flexDirection: 'row',flexWrap: 'wrap', justifyContent: 'center', marginBottom: 50}}>{arr && arr.map((item, index): any => {
                return(
                    <Image source={item} style={{width: 100, height: 100, margin: 5, borderRadius: 4}} />
                )
                
              })}</View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </ScrollView>
  );
};

export default Profile;
