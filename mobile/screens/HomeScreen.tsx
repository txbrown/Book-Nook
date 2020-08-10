import * as React from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { useNavigation } from 'react-navigation-hooks';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { useQuery } from 'urql';
import Button from '../components/Button';
import Loader from '../components/Loader';
import SearchInput from '../components/SearchInput';
import SearchResults from '../components/SearchResults';

interface IHomeScreenProps {}

interface NoBooksViewProps {
  onAddBookPress?: () => void;
}

const searchBooksQuery = `
query searchBooks($query: String!, $page: Int!, $field: SearchField!) {
  searchBooks(query: $query, page:$page, field:$field) {
    ID
    BooksCount
    RatingsCount
    TextReviewsCount
    OriginalPublicationYear
    OriginalPublicationMonth
    BestBook {
      ID
      Title
      Author{
        ID
        Name
      }
      ImageURL
      SmallImageURL
    }
  }
}
`;

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,

    paddingLeft: 16,
    paddingRight: 16,
  },
  dragHandler: {
    alignSelf: 'stretch',
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const NoBooksView: React.FunctionComponent<NoBooksViewProps> = ({
  onAddBookPress,
}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../assets/images/undraw_book_lover_mkck.png')}
        style={{ width: 300, height: 300 }}
        resizeMode='cover'
      />
      <View style={{ marginBottom: 32 }}>
        <Text style={{ fontSize: 16 }}>A bit lonely here. Add some books.</Text>
      </View>

      <Button onPress={onAddBookPress}>Add book</Button>
    </View>
  );
};

const FindBooksView: React.FunctionComponent = ({}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { navigate } = useNavigation();

  const [res] = useQuery({
    query: searchBooksQuery,
    variables: {
      query: searchQuery,
      page: 0,
      field: 'all',
    },
  });

  if (res.error) {
    console.log(res.error);
    return <Text>Something went wrong...</Text>;
  }

  return (
    <View style={{ flex: 1, paddingRight: 16, paddingLeft: 16 }}>
      <View style={{ marginBottom: 16 }}>
        <SearchInput
          placeholder='Find your next train buddy'
          onChangeText={(text) => {
            setSearchQuery(text);
          }}
        />
      </View>

      {res.fetching && <Loader />}
      {!res.fetching && (
        <SearchResults
          onResultPress={() => navigate('Book')}
          results={
            res.data
              ? res.data.searchBooks.map((item) => {
                  return {
                    title: item.BestBook.Title,
                    imageUrl: item.BestBook.ImageURL,
                    originalPublicationYear: item.OriginalPublicationYear,
                    originalPublicationMonth: item.OriginalPublicationMonth,
                    id: item.BestBook.ID,
                  };
                })
              : []
          }
        />
      )}
    </View>
  );
};

const HomeScreen: React.FunctionComponent<IHomeScreenProps> = (props) => {
  const [showAddBook, setShowAddBook] = React.useState(false);
  const panelRef = React.useRef(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {!showAddBook && (
        <NoBooksView
          onAddBookPress={() => {
            setShowAddBook(true);
            panelRef.current.show();
          }}
        />
      )}

      {/* <View style={{ borderRadius: 50 }}> */}
      <SlidingUpPanel
        onBottomReached={() => setShowAddBook(false)}
        ref={panelRef}
        height={screenHeight - 100}
        draggableRange={{ top: screenHeight - 200, bottom: 0 }}
      >
        {(dragHandler) => (
          <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.dragHandler} {...dragHandler}>
              {/* <Text>Drag handler</Text> */}
            </View>
            {showAddBook && <FindBooksView />}
          </KeyboardAvoidingView>
        )}
      </SlidingUpPanel>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
