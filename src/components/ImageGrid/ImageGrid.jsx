import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSuperHeroes } from '../../actions/heoresActions';
import RenderList from '../RenderList/RenderList';
import { ImageWrapper } from './styles';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const ImageGrid = () => {
  const storeHeroes = useSelector((state) => state.heroes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSuperHeroes());
  }, []);

  let [fontsLoaded] = useFonts({
    'SFProDisplay-Bolt': require('../../assets/fonts/SFProDisplay-Bold.ttf'),
    'SFProDisplay-Light': require('../../assets/fonts/SFProDisplay-Light.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
