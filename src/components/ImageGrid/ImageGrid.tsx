import React, { useEffect } from 'react';
import { Text, View, ScrollView, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSuperHeroes } from '../../actions/heoresActions';
import RenderList from '../RenderList/RenderList';

const ImageGrid = () => {
  const storeHeroes = useSelector((state) => state.heroes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSuperHeroes());
  }, []);
  console.log('%%%%%%%%%% Super Heroes on store todo bien', storeHeroes.heroes);
  return (
    <View>
      <FlatList
        numColumns={2}
        data={storeHeroes.heroes}
        renderItem={RenderList}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ImageGrid;
