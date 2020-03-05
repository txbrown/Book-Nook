import LottieView from 'lottie-react-native';
import * as React from 'react';
import { View } from 'react-native';

interface ILoaderProps {}

const Loader: React.FunctionComponent<ILoaderProps> = props => {
  const [animation, setAnimation] = React.useState(null);

  React.useEffect(() => {
    if (animation) {
      console.log('is playing');
      animation.play();
    }
  }, [animation]);

  return (
    <View
      style={{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <LottieView
        autoPlay
        loop
        style={{
          width: 200,
          height: 200
        }}
        source={require('../assets/lottie/2233-downloading-book.json')}
      />
    </View>
  );
};

export default Loader;
