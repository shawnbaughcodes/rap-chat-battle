import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const FeedCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.liveIndication}>•LIVE</Text>
      <Text style={styles.liveTextLeft}>Rapper</Text>
      <Text style={styles.vsText}>VS.</Text>
      <Text style={styles.liveTextRight}>Rapper</Text>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    backgroundColor: '#FFFFFF',
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  liveTextLeft: {
    fontSize: 20,
    width: '50%'
  },
  liveTextRight: {
    fontSize: 20,
    width: '50%',
    textAlign: 'right'
  },
  vsText: {
    fontSize: 15
  },
  liveIndication: {
    color: 'red',
    position: 'absolute',
    right: 15,
    top: 10
  }
};

export default FeedCard;
