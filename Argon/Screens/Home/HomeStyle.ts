import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  headerTitleMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerTitleTextStyle: {
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
  },
  headerIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.23,
    paddingRight: width * 0.05,
  },
  mainContainer: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  beautyFashionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    marginTop: '8%',
    alignItems: 'center',
  },
  subBeautyFashionContainer: {
    flexDirection: 'row',
  },
  beautyContainer: {
    marginLeft: 10,
    color: '#525F7F',
  },
  verticalLine: {
    borderWidth: 0.5,
    height: 30,
  },
  fashionContainer: {
    flexDirection: 'row',
  },
  fashionText: {
    marginLeft: 10,
    color: '#525F7F',
  },
});

export default Styles;
