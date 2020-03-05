import { Text, TextProps } from 'react-native';
import styled from 'styled-components';

const Title = styled<TextProps>(Text)`
  font-size: 18px;
  font-weight: bold;
  flex: 1;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
`;

export default Title;
