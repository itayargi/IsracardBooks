import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import imageIndex from '../assets/images/imageIndex';
import AppBG from '../components/appBackground/AppBG';
import strings from '../utils/strings';
import {ICustomNavigationFunctionComponent} from '../utils/types';

const ErrorScreen: ICustomNavigationFunctionComponent = () => {
  return (
    <AppBG style={styles.container}>
      <Image source={imageIndex.warining()} style={styles.icon} />
      <Text style={styles.title}>{strings.errorText_title}</Text>
      <Text style={styles.text}>{strings.errorText_text}</Text>
    </AppBG>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#34495E',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default ErrorScreen;
