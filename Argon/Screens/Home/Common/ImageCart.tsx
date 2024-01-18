import {View, Dimensions, Image, Text} from 'react-native';
import {IceCream} from '../../../Assets';
import Styles from './ImageCartStyle';

interface ImageCart {
  imageName: any;
  align: string;
  text: string;
}

const ImageCart = ({imageName, align, text}: ImageCart) => {
  const {width} = Dimensions.get('window');
  return (
    <View style={Styles.mainContainer}>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: align === 'vertical' ? 'column' : 'row',
          width: align === 'vertical' ? width * 0.42 : width * 0.9,
          height: align === 'vertical' ? width * 0.6 : width * 0.3,
          borderColor: 'transparent',
          borderRadius: 8,
        }}>
        <View
          style={
            align === 'vertical'
              ? {width: '100%', height: '50%'}
              : {width: '45%', height: '100%'}
          }>
          <Image
            source={imageName}
            style={{
              width: '100%',
              height: '100%',
              borderBottomLeftRadius: align === 'vertical' ? 0 : 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: align === 'vertical' ? 8 : 0,
            }}
          />
        </View>
        <View
          style={{
            width: align === 'vertical' ? '100%' : '55%',
            paddingHorizontal: 13,
            paddingVertical: 10,
          }}>
          <Text numberOfLines={2}>
            {text}
          </Text>
          <View style={{bottom: -40}}>
            <Text style={{fontWeight: 'bold', color: '#5E72E4'}}>
              View article
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ImageCart;
