import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import styled from 'styled-components';

interface ISearchInputProps extends TextInputProps {}

const StyledInput = styled(TextInput)`
  border-radius: 50px;
  width: 100%;
  height: 32px;
  min-width: 100%;
  background-color: #eeeeee;
  padding: 0 12px;
`;

const Container = styled(View)`
  position: relative;
  width: 100%;
  flex-direction: row;
`;

const SearchIcon = styled(Ionicons)`
  position: absolute;
  right: 12px;
  top: 6px;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const SearchInput: React.FunctionComponent<ISearchInputProps> = props => {
  return (
    <Container>
      <SearchIcon name='ios-search' size={16} />
      <StyledInput {...props} />
    </Container>
  );
};

export default SearchInput;
