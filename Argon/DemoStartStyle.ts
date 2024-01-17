import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const Styles = StyleSheet.create({
  mainScreen: {width: '100%', height: '100%'},
  bgView: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    paddingHorizontal: width * 0.08,
  },
  appLogo: {height: width * 0.3, width: width * 0.5},
  headText: {
    width: '100%',
    height: '50%',
    paddingHorizontal: width * 0.08,
  },
  subHeadText: {width: '70%', marginBottom: width * 0.05},
  headStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 45,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 5, height: 5},
    textShadowRadius: 5,
  },
  subStyle: {color: 'white'},
});

export default Styles;
