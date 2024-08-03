import React, {useEffect, useRef} from 'react';
import {
  Animated,
  StyleSheet,
  View,
  Image,
  Easing,
  ActivityIndicator,
} from 'react-native';
import {resetAndNavigate} from '../navigation/navigationRef';
import {ScreenName} from '../utils/enums';
import {wait} from '../utils/utils';
import imageIndex from '../assets/images/imageIndex';

const Splash = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();

    // Navigate to HomeScreen after 3 seconds
    wait(3000).then(() => {
      resetAndNavigate(ScreenName.HomeScreen);
    });
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={{opacity: fadeAnim}}>
        <Image source={imageIndex.bookIcon()} style={styles.logo} />
      </Animated.View>
      <ActivityIndicator size="large" color="#ffffff" style={styles.loader} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,
  },
});
