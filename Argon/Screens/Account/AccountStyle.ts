import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  safeAreViewContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    height: '100%',
  },
  mainConatainer: {
    height: '100%',
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  headerFirstSection: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
  },
  headerSecondSection: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconStyle: {
    marginRight: width * 0.06,
  },
  whiteContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteSubContainer: {
    backgroundColor: '#F4F5F7',
    width: '90%',
    height: '90%',
    marginTop: width * 0.06,
    borderRadius: 8,
  },
  subWhiteContainer: {
    backgroundColor: '#FFFFFF',
    height: '25%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  signUpTextContainer: {
    alignItems: 'center',
    marginTop: width * 0.08,
  },
  signUpText: {
    color: '#ADB5BD',
    fontSize: 15,
  },
  loginWithApp: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: width * 0.08,
  },
  gitHubContainer: {
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
    elevation: 10
  },
  gitHubStyle: {
    fontWeight: 'bold',
    color: '#5E72E4',
    marginLeft: 10,
  },
  signUpCredential: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpCredentialSub: {
    width: '90%',
  },
  signUpSubContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  signUpCredentialText: {
    color: '#ADB5BD',
    fontSize: 15,
  },
  textInputContainer: {
    marginTop: 20,
  },
  inputStyle: {
    marginVertical: 10,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {width: 10, height: 10},
  },
  passwordStreght: {
    marginVertical: 20,
    marginLeft: 10,
  },
  passwordStreghtText: {
    color: '#8898AA',
  },
  strongText: {
    color: '#2DCE89',
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkFirstText: {
    marginLeft: 10,
  },
  checkSecondText: {
    color: '#5E72E4',
    fontWeight: 'bold',
  },
  createAccountContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonStyle: {
    width: '55%',
  },
});

export default Styles;
