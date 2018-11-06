import React from 'react';
import { View, Text } from 'react-native';

import { Avatar } from 'react-native-elements';

const MessageCard = () => {
  return (
    <View style={styles.container}>
      <Avatar />
      <Text style={styles.messageTitle}>Message</Text>
      <Text style={styles.messageMenu}>•••</Text>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: '#FFFFFF',
    height: 50,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10
  },
  messageTitle: {},
  messageMenu: {}
};

export default MessageCard;
