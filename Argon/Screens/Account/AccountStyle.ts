import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
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
    marginRight: 20,
  },
});

export default Styles;
