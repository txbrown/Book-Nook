import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProperties
} from 'react-native';
import styled from 'styled-components';

interface IButtonProps extends TouchableOpacityProperties {}

const StyledButton = styled(TouchableOpacity)`
  border-radius: 50px;
  padding-right: 48px;
  padding-left: 48px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #fba4a3;
  align-items: center;
  justify-content: center;
`;

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledButton {...props}>
      <Text style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
        {children}
      </Text>
    </StyledButton>
  );
};

export default Button;
