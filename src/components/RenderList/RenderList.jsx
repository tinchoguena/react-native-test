import React from 'react';
import { ScrollView } from 'react-native';

import { ItemImage, ItemTitle, ItemSubTitle } from './styles';

const renderList = (itemData) => {
  return (
    <ScrollView>
      <ItemImage
        key={itemData.item.id}
        source={{ uri: itemData.item.img }}
        imageStyle={{ borderRadius: 12 }}
      >
        <ItemTitle key={itemData.item.name}>{itemData.item.name}</ItemTitle>
        <ItemSubTitle key={itemData.item.weight + itemData.item.id}>
          {itemData.item.weight}
        </ItemSubTitle>
        <ItemSubTitle key={itemData.item.height + itemData.item.id}>
          {itemData.item.height}
        </ItemSubTitle>
      </ItemImage>
    </ScrollView>
  );
};

export default renderList;
