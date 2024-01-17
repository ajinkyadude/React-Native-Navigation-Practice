import {
  Image,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  View,
  Text,
  Animated,
} from 'react-native';
import {SplashScreen, SplashLogo} from './Assets/index';
import Styles from './DemoStartStyle';
import Constant from './Common/Constant';
import LongButton from './Common/LongButton/LongButton';
import {useEffect} from 'react';

interface Splash {
  navigation: any;
}

const DemoStart = ({navigation}: Splash) => {
  const anime = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(anime, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();

    // setTimeout(() => {
    // //   navigation.navigate('Home');
    //   navigation.reset({
    //     index: 0,
    //     routes: [{name: 'DrawerNavigator'}]
    //   })
    // }, 3000);
  });

  const nextHandle = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'DrawerNavigator'}],
    });
  };

  const animeStyle = {
    opacity: anime.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };
  return (
    <ImageBackground
      source={SplashScreen}
      resizeMode="cover"
      style={Styles.mainScreen}>
      <Animated.View style={[Styles.bgView, animeStyle]}>
        <Image
          source={SplashLogo}
          resizeMode={'contain'}
          style={Styles.appLogo}
        />
      </Animated.View>
      <View style={Styles.headText}>
        <View style={Styles.subHeadText}>
          <Text style={Styles.headStyle}>{Constant.SplashScreenHeading}</Text>
        </View>
        <View>
          <Text style={Styles.subStyle}>{Constant.SplashScreenSubHeading}</Text>
        </View>
        <View style={{marginTop: 180}}>
          <LongButton Label={'Get Started'} onPress={nextHandle} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default DemoStart;
