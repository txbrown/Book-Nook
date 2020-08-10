import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createClient, Provider, useQuery } from 'urql';
import AppNavigator from './navigation';

const client = createClient({
  url: 'https://salty-river-32604.herokuapp.com/query',
  fetchOptions: { headers: { origin: 'localhost' } },
});

const getUser = `
  query user($id: String!) {
    user(id: $id) {
      ID
    }
  }
`;

const HomePage = () => {
  const [res] = useQuery({ query: getUser, variables: { id: '68979556' } });
  const { data, fetching, error, extensions } = res;
  console.log(extensions);
  console.log(JSON.stringify(error));
  console.log(data);
  return (
    <View>
      <Text>Home Page</Text>
    </View>
  );
};

export default function App() {
  return (
    <Provider value={client}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
