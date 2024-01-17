import {useEffect} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './HomeStyle';
import Constant from '../../Common/Constant';
import CustomInputBox from '../../Common/TextField/CustomInputBox';

const Home = ({navigation}: any) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => {
        return (
          <View style={Styles.headerTitleMainView}>
            <Text style={Styles.headerTitleTextStyle}>
              {Constant.homeHeaderTitle}
            </Text>
          </View>
        );
      },
      headerRight: () => {
        return (
          <View style={Styles.headerIcon}>
            <Icon name={'bell-badge'} color={'black'} size={21} />
            <Icon name={'shopping'} color={'black'} size={21} />
          </View>
        );
      },
    });
  }, []);
  return (
    <View>
      <Text>Hello Home</Text>
      <CustomInputBox/>
    </View>
  );
};

export default Home;
