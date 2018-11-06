import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import SearchBar from '../components/SearchBar';
import MessageCard from '../components/MessageCard';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class MessagesScreen extends Component {
  render() {
    return (
      <View>
        <SearchBar />
        <Text style={styles.header}>Messages</Text>
        <View style={styles.messages}>
          <MessageCard />
        </View>
      </View>
    );
  }
}

const styles = {
  header: {
    color: '#FFF',
    fontSize: 25,
    width: '80%',
    padding: 10
  },
  messages: {
    height: SCREEN_HEIGHT - 182,
    padding: 10
  }
};

export default MessagesScreen;
