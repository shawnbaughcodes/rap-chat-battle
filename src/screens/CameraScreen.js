import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera style={styles.cameraStyle} />
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'pink'
  },
  cameraStyle: { flex: 1, backgroundColor: 'transparent' }
};
