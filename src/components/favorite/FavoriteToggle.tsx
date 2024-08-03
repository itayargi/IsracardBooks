import React, {useEffect, useRef} from 'react';
import {View, Image, StyleSheet, Animated} from 'react-native';
import imageIndex from '../../assets/images/imageIndex';
import RemoveBookBtn from '../book/RemoveBookBtn';
import AddBookBtn from '../book/AddBookBtn';

interface FavoriteToggleProps {
  isFavorite: boolean;
  bookIndex: number;
  book: any;
}

const FavoriteToggle: React.FC<FavoriteToggleProps> = ({
  isFavorite,
  bookIndex,
  book,
}) => {
  const opacity = useRef(new Animated.Value(isFavorite ? 1 : 0)).current;
  const scale = useRef(new Animated.Value(isFavorite ? 1 : 0.8)).current;

  const addOpacity = useRef(new Animated.Value(isFavorite ? 0 : 1)).current;
  const addScale = useRef(new Animated.Value(isFavorite ? 0.8 : 1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: isFavorite ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: isFavorite ? 1 : 0.8,
        useNativeDriver: true,
      }),
      Animated.timing(addOpacity, {
        toValue: isFavorite ? 0 : 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(addScale, {
        toValue: isFavorite ? 0.8 : 1,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isFavorite, opacity, scale, addOpacity, addScale]);

  return (
    <View style={styles.container}>
      {isFavorite ? (
        <Animated.View
          style={[styles.favoriteContainer, {opacity, transform: [{scale}]}]}>
          <RemoveBookBtn index={bookIndex} />
          <Image source={imageIndex.heart()} style={styles.heart} />
        </Animated.View>
      ) : (
        <Animated.View
          style={{opacity: addOpacity, transform: [{scale: addScale}]}}>
          <AddBookBtn book={book} />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  favoriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heart: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
});

export default FavoriteToggle;
