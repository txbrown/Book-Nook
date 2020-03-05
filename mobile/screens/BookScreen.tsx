import * as React from 'react';
import { SafeAreaView } from 'react-navigation';
import Title from '../components/typography/Title';

interface IBookScreenProps {}

const BookScreen: React.FunctionComponent<IBookScreenProps> = props => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Title>Hello Book Screen</Title>
    </SafeAreaView>
  );
};

export default BookScreen;
