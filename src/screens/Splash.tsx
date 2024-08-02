import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {resetAndNavigate} from '../navigation/navigationRef';
import {ScreenName} from '../utils/enums';
import {wait} from '../utils/utils';

const Splash = () => {
  useEffect(() => {
    wait(3000).then(() => {
      resetAndNavigate(ScreenName.HomeScreen);
    });
  }, []);
  return (
    <View style={styles.container}>
      {/* <Text>Splash</Text> */}
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
