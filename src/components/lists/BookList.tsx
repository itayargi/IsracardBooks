import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {IBookListParams} from '../../utils/types';
import Banner from '../banner/Banner';
import BookCard from '../book/BookCard';
import strings from '../../utils/strings';

const BooksList: React.FC<IBookListParams> = ({
  books,
  filteredBooks,
  onPressBook,
  searchQuery,
}) => {
  return (
    <FlatList
      data={filteredBooks}
      keyExtractor={item => item.index.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <BookCard
          title={item.title}
          releaseDate={item.releaseDate}
          cover={item.cover}
          onPress={() => onPressBook(item)}
        />
      )}
      ListHeaderComponent={<Banner books={books} onPressBook={onPressBook} />}
      ListEmptyComponent={searchQuery ? <EmptyComponent /> : null}
      contentContainerStyle={styles.listContent}
    />
  );
};

const EmptyComponent = () => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyText}>{strings.searchNoResults}</Text>
  </View>
);

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 10,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#555',
  },
});

export default BooksList;
