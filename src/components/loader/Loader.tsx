import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

const Loader = () => {
  return (
    <ActivityIndicator size="large" color="#007bff" style={styles.loader} />
  );
};

export default Loader;

const styles = StyleSheet.create({
  loader: {
    marginTop: 20,
  },
});
