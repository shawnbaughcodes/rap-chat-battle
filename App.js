import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import state from './src/stubDataState';

import CameraScreen from './src/screens/CameraScreen';
import ChatScreen from './src/screens/ChatScreen';
import FeedScreen from './src/screens/FeedScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import PickBeatScreen from './src/screens/PickBeatScreen';
import LoginScreen from './src/screens/LoginScreen';

export default class App extends React.Component {
  state = state;

  render() {
    const MainNavigator = createBottomTabNavigator(
      {
        auth: {
          screen: LoginScreen
        },
        main: {
          screen: createBottomTabNavigator(
            {
              feed: {
                screen: FeedScreen,
                navigationOptions: () => ({
                  title: 'Feed'
                })
              },
              battle: {
                screen: CameraScreen,
                navigationOptions: () => ({
                  title: 'Battle'
                })
              },
              beatSelection: {
                screen: PickBeatScreen,
                navigationOptions: () => ({
                  title: 'Beat Selection'
                })
              },
              messages: {
                screen: MessagesScreen,
                navigationOptions: () => ({
                  title: 'Messages'
                })
              },
              chat: {
                screen: ChatScreen,
                navigationOptions: () => ({
                  title: 'Chat'
                })
              }
            },
            {
              navigationOptions: {
                tabBarVisible: true
              },
              lazy: true
            }
          )
        }
      },
      {
        navigationOptions: {
          tabBarVisible: true
        },
        lazy: true
      }
    );
    return (
      <View style={styles.container}>
        {/* <LoginScreen /> */}
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
