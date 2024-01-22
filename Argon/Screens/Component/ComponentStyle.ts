import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  mainContainer: {
    // height: '100%',
    width: '100%',
    alignItems: 'center'
  },
  subMainContainer: {
    width: '90%',
    marginTop: width * 0.1,
    // flexDirection: 'column',
  },
});

export default Styles;
