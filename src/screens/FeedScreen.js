import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import SearchBar from '../components/SearchBar';
import FeedCard from '../components/FeedCard';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class FeedScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <Text style={styles.header}>Battles</Text>
        <View style={styles.body}>
          <FeedCard />
        </View>
      </View>
    );
  }
}

const styles = {
  container: { backgroundColor: '#333333' },
  header: {
    fontSize: 25,
    padding: 10,
    color: '#FFFFFA'
  },
  body: {
    height: SCREEN_HEIGHT - 182,
    padding: 10
  }
};

export default FeedScreen;
