import React from 'react';
import { Text, View } from 'react-native';

const ChatBubble = ({ userType }) =>
  userType === 'receiving' ? (
    <View style={styles.receivingContainer}>
      <Text style={styles.content}>ChatBubble</Text>
    </View>
  ) : (
    <View style={styles.sendingContainer}>
      <Text style={styles.content}>ChatBubble</Text>
    </View>
  );

const styles = {
  receivingContainer: {
    backgroundColor: 'gray',
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 20,
    maxWidth: '50%'
  },
  sendingContainer: {
    backgroundColor: 'aqua',
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 20,
    maxWidth: '50%',
    alignItems: 'flex-end'
  },
  content: {
    fontSize: 15
  }
};
export default ChatBubble;
