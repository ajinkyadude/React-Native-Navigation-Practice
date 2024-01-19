import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  headerFirstSection: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
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
  backHandlerStyle: {
    marginHorizontal: width * 0.05,
  },
});

export default Styles;
