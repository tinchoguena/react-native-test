import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSuperHeroes } from '../../actions/heoresActions';
import RenderList from '../RenderList/RenderList';

const ImageGrid = () => {
  const storeHeroes = useSelector((state) => state.heroes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSuperHeroes());
  }, []);

  return (
    <FlatList
      numColumns={2}
      data={storeHeroes.heroes}
      renderItem={RenderList}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ImageGrid;
