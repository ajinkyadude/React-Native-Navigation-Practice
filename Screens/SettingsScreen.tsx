import {useEffect, useReducer, useRef} from 'react';
import {Text, View, Animated, Button} from 'react-native';

const SettingsScreen = () => {
  const val = useRef(new Animated.Value(0)).current;
  
  const IIFE = (()=>{
    var sum = 20;
    console.log("Sum of NUmner "+sum);
    return () => {console.log(" Addition sum "+(sum+10));
    }
  })();

  IIFE()
  IIFE()
  IIFE()
  IIFE()
  IIFE()

  const AnimationStart = () => {
    Animated.timing(val, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };
  const AnimationEnd = () => {
    Animated.timing(val, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    Animated.timing(val, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Animated.View
        style={{
          padding: 20,
          backgroundColor: 'powderblue',
          opacity: val,
        }}>
        <Text> SettingScreen</Text>
      </Animated.View>

      <Button title="Animation Start" onPress={AnimationStart} />
      <View></View>
      <Button title="Animation Stop" onPress={AnimationEnd} />
    </View>
  );
};
export default SettingsScreen;

// import React, {useRef} from 'react';
// import {
//   Animated,
//   Text,
//   View,
//   StyleSheet,
//   Button,
//   SafeAreaView,
// } from 'react-native';

// const SettingsScreen = () => {
//   // fadeAnim will be used as the value for opacity. Initial Value: 0
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   const fadeIn = () => {
//     // Will change fadeAnim value to 1 in 5 seconds
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 5000,
//       useNativeDriver: true,
//     }).start();
//   };

//   const fadeOut = () => {
//     // Will change fadeAnim value to 0 in 3 seconds
//     Animated.timing(fadeAnim, {
//       toValue: 0,
//       duration: 3000,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Animated.View
//         style={[
//           styles.fadingContainer,
//           {
//             // Bind opacity to animated value
//             opacity: fadeAnim,
//           },
//         ]}>
//         <Text style={styles.fadingText}>Fading View!</Text>
//       </Animated.View>
//       <View style={styles.buttonRow}>
//         <Button title="Fade In View" onPress={fadeIn} />
//         <Button title="Fade Out View" onPress={fadeOut} />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   fadingContainer: {
//     padding: 20,
//     backgroundColor: 'powderblue',
//   },
//   fadingText: {
//     fontSize: 28,
//   },
//   buttonRow: {
//     flexBasis: 100,
//     justifyContent: 'space-evenly',
//     marginVertical: 16,
//   },
// });

// export default SettingsScreen;
