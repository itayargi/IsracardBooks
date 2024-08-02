// screens/HomeScreen.tsx
import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store';
import {setSearchQuery} from '../store/booksSlice';
import {ScreenName} from '../utils/enums';
import {ICustomNavigationFunctionComponent} from '../utils/types';
import {navigate} from '../navigation/navigationRef';

const HomeScreen: ICustomNavigationFunctionComponent = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const books = useSelector((state: RootState) => state.books.list);
  const searchQuery = useSelector(
    (state: RootState) => state.books.searchQuery,
  );

  useEffect(() => {
    dispatch({type: 'books/fetchBooks'});
  }, [dispatch]);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View>
      <TextInput
        placeholder="Search..."
        value={searchQuery}
        onChangeText={text => dispatch(setSearchQuery(text))}
      />
      <FlatList
        data={filteredBooks}
        keyExtractor={item => item.index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigate(ScreenName.BookDetailsScreen, {book: item})
            }>
            <Image
              source={{uri: item.cover}}
              style={{width: 100, height: 150}}
            />
            <Text>{item.title}</Text>
            <Text>{item.releaseDate}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
