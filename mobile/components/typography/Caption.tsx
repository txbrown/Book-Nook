import { Text, TextProps } from 'react-native';
import styled from 'styled-components';
import { Color } from '../../utils/colors';

const Caption = styled<TextProps>(Text)`
  font-size: 12px;
  flex: 1;
  flex-wrap: wrap;
  color: ${props => props.color || Color.DarkGray};
`;

export default Caption;
