import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {BookCardProps} from '../../utils/types';
import colors from '../../utils/colors';

const BookCard: React.FC<BookCardProps> = ({
  title,
  releaseDate,
  cover,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <Image source={{uri: cover}} style={styles.coverImage} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.releaseDate}>{releaseDate}</Text>
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
  },
  coverImage: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  releaseDate: {
    fontSize: 14,
    color: colors.release,
  },
});

export default BookCard;
