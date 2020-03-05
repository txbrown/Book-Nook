import { Text, TextProps } from 'react-native';
import styled from 'styled-components';
import { Color } from '../../utils/colors';

const Body = styled<TextProps>(Text)`
  font-size: 14px;
  flex: 1;
  flex-wrap: wrap;
  color: ${Color.Black};
`;

export default Body;
