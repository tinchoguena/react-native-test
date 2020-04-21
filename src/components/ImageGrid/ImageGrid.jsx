import React, { useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSuperHeroes, fetchHeroesPending } from '../../actions/heoresActions';
import RenderList from '../RenderList/RenderList';
import { ImageWrapper, ErrorContainer } from './styles';
import { AppLoading } from 'expo';

const ImageGrid = () => {
  const storeHeroes = useSelector((state) => state.heroes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSuperHeroes());
  }, []);
  if (storeHeroes.pending === true) {
    return <AppLoading />;
  } else if (storeHeroes.error === true){
    return (
      <ErrorContainer>
          <Text>An error occured loading the heros</Text>
      </ErrorContainer>
      )
  }else {
    return (
      <ImageWrapper>
        <FlatList
          numColumns={2}
          data={storeHeroes.heroes}
          renderItem={RenderList}
          keyExtractor={(item) => item.id}
        />
      </ImageWrapper>
    );
  }
};

export default ImageGrid;
