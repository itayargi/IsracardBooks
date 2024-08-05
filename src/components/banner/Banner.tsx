import React, {useEffect, useRef} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Book} from '../../utils/types';
import {sizes} from '../../utils/utils';
import colors from '../../utils/colors';

interface BannerProps {
  books: Book[];
  onPressBook: (book: Book) => void;
}

const Banner: React.FC<BannerProps> = ({books, onPressBook}) => {
  const flatListRef = useRef<FlatList<Book>>(null);
  const currentIndex = useRef(0);
  const width = sizes.pageWidth;

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToOffset({
          offset: ((currentIndex.current + 1) % books.length) * width,
          animated: true,
        });
      }
      currentIndex.current = (currentIndex.current + 1) % books.length;
    }, 5000);

    return () => clearInterval(interval);
  }, [books.length, width]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={books}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => onPressBook(item)}
            style={[styles.slide, {width}]}>
            <Image source={{uri: item.cover}} style={styles.coverImage} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.releaseDate}>{item.releaseDate}</Text>
          </TouchableOpacity>
        )}
        snapToInterval={width}
        snapToAlignment="center"
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    marginBottom: 20,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  coverImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.bannerTitle,
    marginTop: 10,
    textAlign: 'center',
  },
  releaseDate: {
    fontSize: 14,
    color: colors.bannerRelease,
    textAlign: 'center',
  },
});

export default Banner;
