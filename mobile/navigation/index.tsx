import { Foundation, Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookScreen from '../screens/BookScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const tabBarOptions = {
  activeTintColor: '#fff',
  labelStyle: {
    fontSize: 12
  },
  style: {
    borderRadius: '25',
    backgroundColor: '#03061B',
    height: 80
  }
};

const HomeStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({})
    },
    Book: {
      screen: BookScreen
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Foundation
            name='book'
            size={32}
            style={{ color: focused ? 'white' : '#C7C7BA' }}
          />
        )
      }
    },
    Discover: {
      screen: DiscoverScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name='md-planet'
            size={32}
            style={{ color: focused ? 'white' : '#C7C7BA' }}
          />
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <MaterialIcons
            name='person'
            size={32}
            style={{ color: focused ? 'white' : '#C7C7BA' }}
          />
        )
      }
    }
  },
  { tabBarOptions }
);

export default createAppContainer(AppNavigator);
