import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const Styles = StyleSheet.create({
  mainContainer: {
    marginTop: width * 0.08,
  },
});

export default Styles
