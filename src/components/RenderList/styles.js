import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

const ItemImage = styled.ImageBackground`
  height: 218.12px;
  width: 164px;
  text-shadow-color: rgba(0, 0, 0, 0.3);
  shadow-opacity: 0.3;
  text-shadow-radius: 8px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 16px;
  border-radius: 8px;
`;

const Gradient = styled(LinearGradient)`
  border-radius: 8px;
`;

const ItemTitle = styled.Text`
  font-family: SFProDisplay-Bolt;
  font-size: 17px;
  width: 137px;
  height: 20px;
  color: white;
  margin-top: 148.56px;
  margin-bottom: 3px;
  padding-left: 14.5px;
  padding-right: 12.5px;
  text-shadow-color: rgba(0, 0, 0, 5);
  shadow-opacity: 0.2;
  text-shadow-radius: 4px;
`;

// this height is modified by 2px so the text can fit.

const SubTitleWrapper = styled.View`
  margin-top: 0px;
  margin-bottom: 14.56px;
  margin-left: 14.5px;
  width: 137px;
  height: 34px;
`;

const ItemSubTitle = styled.Text`
  font-family: SFProDisplay-Light;
  font-size: 14px;
  color: white;
  text-shadow-color: rgba(0, 0, 0, 0.5);
  shadow-opacity: 0.2;
  text-shadow-radius: 4px;
  padding: 0px;
  margin: 0px;
`;

export { ItemImage, ItemTitle, SubTitleWrapper, Gradient, ItemSubTitle };
