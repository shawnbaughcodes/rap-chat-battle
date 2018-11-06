import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Avatar } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Avatar />
      <View style={styles.bar}>
        <Text>Search</Text>
      </View>
    </View>
  );
};

const styles = {
  container: {
    width: SCREEN_WIDTH,
    height: 42,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bar: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 20,
    width: SCREEN_WIDTH - 70,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  barText: {}
};
export default SearchBar;
