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
import Check from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SplashScreen, Google} from '../../Assets';
import Styles from './AccountStyle';
import Constant from '../../Common/Constant';
import CustomInputBox from '../../Common/TextField/CustomInputBox';
import {useState} from 'react';
import LongButton from '../../Common/LongButton/LongButton';
// import GoogleAuthProvider from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '767079140138-bt9p3rucad6grlcpch6qaj30ju8cbdt7.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
});

const AccountScreen = ({navigation}: any) => {
  const backHandler = () => {
    navigation.goBack();
  };
  const checkHandle = () => {
    setChecked(!Checked);
  };
  const [state, setState] = useState({});

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      //   const {idToken} = await GoogleSignin.signIn();
      const userInfo = await GoogleSignin.signIn();
      //   const googleCredentials = GoogleAuthProvider;
      setState(userInfo);
      //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      //   console.log("googleCredential ****  "+googleCredential);

      //   await  auth().signInWithCredential(googleCredential);

      //   console.log('userInfo  ****  ' + userInfo);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  console.log('userInfo ***  ' + JSON.stringify(state));

  const [Checked, setChecked] = useState(false);
  return (
    <ImageBackground source={SplashScreen} style={Styles.mainConatainer}>
      <View style={Styles.safeAreViewContainer}>
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
          <View style={Styles.whiteContainer}>
            <View style={Styles.whiteSubContainer}>
              <View style={Styles.subWhiteContainer}>
                <View style={Styles.signUpTextContainer}>
                  <Text style={Styles.signUpText}>{Constant.signUpText}</Text>
                </View>
                <View style={Styles.loginWithApp}>
                  <TouchableOpacity style={Styles.gitHubContainer}>
                    <Icon
                      name={Constant.gitHubIcon}
                      size={21}
                      color={'black'}
                    />
                    <Text style={Styles.gitHubStyle}>
                      {Constant.gitHubText}
                    </Text>
                    <Text>{state?.user?.name}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Styles.gitHubContainer}
                    onPress={signIn}>
                    <Image source={Google} style={{width: 21, height: 21}} />
                    <Text style={Styles.gitHubStyle}>
                      {Constant.googleText}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={Styles.signUpCredential}>
                <View style={Styles.signUpCredentialSub}>
                  <View style={Styles.signUpSubContainer}>
                    <Text style={Styles.signUpCredentialText}>
                      {Constant.signUpCredentialText}
                    </Text>
                  </View>
                  <View style={Styles.textInputContainer}>
                    <CustomInputBox
                      placeHolder={Constant.inputPlaceholderName}
                      firstIcon={Constant.graduationIcon}
                      ExternalStyle={Styles.inputStyle}
                    />
                    <CustomInputBox
                      placeHolder={Constant.inputPlaceholderEmail}
                      firstIcon={Constant.envelopeIcon}
                      ExternalStyle={Styles.inputStyle}
                    />
                    <CustomInputBox
                      placeHolder={Constant.inputPlaceholder}
                      firstIcon={Constant.passwordIcon}
                      ExternalStyle={Styles.inputStyle}
                    />
                  </View>
                  <View style={Styles.passwordStreght}>
                    <Text style={Styles.passwordStreghtText}>
                      {Constant.passwordStreghtText}
                      <Text style={Styles.strongText}>
                        {Constant.strongText}
                      </Text>
                    </Text>
                  </View>
                  <View style={Styles.checkboxContainer}>
                    <TouchableOpacity onPress={checkHandle}>
                      <Icon
                        name={
                          Checked
                            ? Constant.accountChecked
                            : Constant.accountUnChecked
                        }
                        size={23}
                        color={'#5E72E4'}
                      />
                    </TouchableOpacity>
                    <Text style={Styles.checkFirstText}>
                      {Constant.checkFirstText}
                      <Text style={Styles.checkSecondText}>
                        {Constant.checkSecondText}
                      </Text>
                    </Text>
                  </View>
                  <View style={Styles.createAccountContainer}>
                    <View style={Styles.buttonStyle}>
                      <LongButton
                        Label={Constant.createButton}
                        TextColor={'#FFFFFF'}
                        ButtonColor={'#5E72E4'}
                        onPress={() => {}}
                      />
                    </View>
                  </View>
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
