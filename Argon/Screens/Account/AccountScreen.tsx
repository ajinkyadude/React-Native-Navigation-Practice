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

const AccountScreen = ({navigation}: any) => {
  const backHandler = () => {
    navigation.goBack();
  };
  const checkHandle = () => {
    setChecked(!Checked);
  };
  const [Checked, setChecked] = useState(false);
  return (
    <ImageBackground source={SplashScreen} style={Styles.mainConatainer}>
      <View
        style={Styles.safeAreViewContainer}>
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
                  </TouchableOpacity>
                  <TouchableOpacity style={Styles.gitHubContainer}>
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
                  <View
                    style={Styles.createAccountContainer}>
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
