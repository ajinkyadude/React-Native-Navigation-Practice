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
    paddingRight: width * 0.05 ,
  },
});

export default Styles;
