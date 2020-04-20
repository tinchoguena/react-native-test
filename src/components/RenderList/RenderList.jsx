import React from 'react';
import { ScrollView } from 'react-native';
import { ItemImage, ItemTitle, ItemSubTitle, SubTitleWrapper, Gradient } from './styles';

const renderList = (itemData) => {
  return (
    <ScrollView>
      <ItemImage
        key={itemData.item.id}
        source={{ uri: itemData.item.img }}
        imageStyle={{ borderRadius: 8 }}
      >
        <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.82)']}>
          <ItemTitle key={itemData.item.name}>{itemData.item.name}</ItemTitle>
          <SubTitleWrapper>
            <ItemSubTitle
              key={itemData.item.weight + itemData.item.id}
              numberOfLines={2}
              ellipsizeMode="head"
            >
              Weight: {itemData.item.weight} {'\n'}Height: {itemData.item.height}
            </ItemSubTitle>
          </SubTitleWrapper>
        </Gradient>
      </ItemImage>
    </ScrollView>
  );
};

export default renderList;
