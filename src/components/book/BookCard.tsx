import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {BookCardProps} from '../../utils/types';
import colors from '../../utils/colors';
import imageIndex from '../../assets/images/imageIndex';

const BookCard: React.FC<BookCardProps> = ({
  title,
  releaseDate,
  cover,
  onPress,
  isFavorite,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <Image source={{uri: cover}} style={styles.coverImage} />
      <View style={styles.textContainer}>
        <View style={styles.textBlock}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.releaseDate}>{releaseDate}</Text>
        </View>
        {isFavorite && (
          <Image source={imageIndex.heart()} style={styles.heart} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.bookBackground,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  coverImage: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  textBlock: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  releaseDate: {
    fontSize: 14,
    color: colors.release,
  },
  heart: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{translateY: -12.5}],
  },
});

export default BookCard;
