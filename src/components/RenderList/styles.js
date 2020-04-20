import {
  Dimensions
} from 'react-native';
import styled from 'styled-components/native';

const {
  width
} = Dimensions.get('window');


const GridItem = styled.View `
  background-color: white;
  border-radius: 20px;
  margin: 2px;
  padding: 5px;
`;
const ItemImage = styled.ImageBackground `
  width: ${width*0.48}px;
  height: ${width*0.6}px;
  justify-content: flex-end;
  align-items: flex-start;
`;

const ItemTitle = styled.Text `
  font-size: 22px;
  font-weight: 800;
  color: white;
  margin: 2px;
  padding-left: 10px;
  text-shadow-color: rgba(0, 0, 0, 1.5);
  text-shadow-offset: {width: -1, height: 1};
  text-shadow-radius: 10px;
`;

const ItemSubTitle = styled.Text `
  justify-content: flex-end;
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin: 1px;
  padding-left: 10px;
  padding-bottom: 2px;
  text-shadow-color: rgba(0, 0, 0, 0.75);
  text-shadow-offset: {width: -2, height: 2};
  text-shadow-radius: 10px;
`;
export {
  GridItem,
  ItemImage,
  ItemTitle,
  ItemSubTitle,
};