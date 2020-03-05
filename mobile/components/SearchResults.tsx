import * as React from 'react';
import { FlatList, Image, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styled from 'styled-components';
import Caption from './typography/Caption';
import Title from './typography/Title';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

interface Result {
  title: string;
  imageUrl: string;
  originalPublicationYear: number;
  originalPublicationMonth: number;
  id: string;
}

interface ISearchResultsProps {
  results: Result[];
  onResultPress?: (id: string) => void;
}

const BookCover = styled(Image)`
  width: 65px;
  height: 98.6px;
  margin-right: 32px;
`;

const SearchResults: React.FunctionComponent<ISearchResultsProps> = ({
  results,
  onResultPress
}) => {
  return (
    <View>
      <FlatList
        style={{ flex: 1 }}
        data={results}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          return (
            <TouchableWithoutFeedback onPress={() => onResultPress(item.id)}>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 32
                }}
              >
                <BookCover source={{ uri: item.imageUrl }} resizeMode='cover' />
                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1
                    }}
                  >
                    <Title>{item.title}</Title>
                  </View>
                  <Caption>
                    {item.originalPublicationYear},{' '}
                    {monthNames[item.originalPublicationMonth]}
                  </Caption>
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
};

export default SearchResults;
