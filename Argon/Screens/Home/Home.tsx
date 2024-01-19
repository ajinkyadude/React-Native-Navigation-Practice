import {useEffect} from 'react';
import {Image, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fashion from 'react-native-vector-icons/Fontisto';
import Styles from './HomeStyle';
import Constant from '../../Common/Constant';
import CustomInputBox from '../../Common/TextField/CustomInputBox';
import {IceCream, Flower, Girl, Man, Nature} from '../../Assets';
import ImageCart from './Common/ImageCart';
import {ScrollView} from 'react-native';

const Home = ({navigation}: any) => {
  const {width} = Dimensions.get('window');
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
    <ScrollView>
      <View style={Styles.mainContainer}>
        <CustomInputBox
          borderColor="#CAD1D7"
          lastIcon={Constant?.searchPlus}
          placeHolder={Constant?.homeScreenInputText}
        />
        <View style={Styles.beautyFashionContainer}>
          <View style={Styles.subBeautyFashionContainer}>
            <Icon name={Constant.diamond} size={21} color={'black'} />
            <Text style={Styles.beautyContainer}>{Constant.beauty}</Text>
          </View>
          <View style={Styles.verticalLine}></View>
          <View style={Styles.fashionContainer}>
            <Fashion name={Constant.shoppingBag} size={21} color={'black'} />
            <Text style={Styles.fashionText}>{Constant.fashion}</Text>
          </View>
        </View>
        <ImageCart
          align="horizontal"
          imageName={IceCream}
          text={Constant.iceCreamText}
        />
        <View
          style={{
            flexDirection: 'row',
            width: width * 0.9,
            justifyContent: 'space-between',
          }}>
          <ImageCart
            align="vertical"
            imageName={Flower}
            text={Constant.flowerText}
          />
          <ImageCart
            align="vertical"
            imageName={Girl}
            text={Constant.girlText}
          />
        </View>
        <ImageCart
          align="horizontal"
          imageName={Man}
          text={Constant.flowerText}
        />
        <View
          style={{backgroundColor: 'white', marginTop: 30, borderRadius: 8}}>
          <Image
            source={Nature}
            style={{borderTopRightRadius: 8, borderTopLeftRadius: 8}}
          />
          <Text style={{width: 200, padding: 10}} numberOfLines={1}>
            {Constant.natureText}
          </Text>
            <Text style={{fontWeight: 'bold', color: '#5E72E4', padding: 10}}>
              View article
            </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
