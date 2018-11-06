import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import ChatBubble from '../components/ChatBubble';
import { Avatar } from 'react-native-elements';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class ChatScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Avatar />
          <Text style={styles.title}>Chat With Name</Text>
        </View>
        <View style={styles.body}>
          <ChatBubble style={styles.chat} userType="sending" />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    width: '100%'
  },
  title: {
    color: '#FFFFFF',
    fontSize: 25
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  chat: {
    justifyContent: 'flex-end',
    backgroundColor: 'pink'
  },
  body: { height: SCREEN_HEIGHT - 182, padding: 10 }
};

export default ChatScreen;
