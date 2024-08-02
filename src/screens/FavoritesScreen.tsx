import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {removeFavorite} from '../store/favoritesSlice';
import {RootState, AppDispatch} from '../store';
import {ICustomNavigationFunctionComponent} from '../utils/types';

const FavoritesScreen: ICustomNavigationFunctionComponent = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const favoriteBooks = useSelector((state: RootState) => state.favorites.list);

  return (
    <View>
      <FlatList
        data={favoriteBooks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('BookDetails', {book: item})}>
              <Image
                source={{uri: item.cover}}
                style={{width: 100, height: 150}}
              />
              <Text>{item.title}</Text>
              <Text>{item.releaseDate}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(removeFavorite(item.id))}>
              <Text>Remove from Favorites</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
