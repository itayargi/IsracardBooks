import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import colors from '../../utils/colors';

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const AppBG: React.FC<Props> = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default AppBG;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
    padding: 20,
  },
});
