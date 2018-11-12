import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraScreen extends Component {
  state = {
    hasCameraPermission: true,
    cameraPosition: Camera.Constants.Type.front
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  onFlipCamera = () => {
    const { cameraPosition } = this.state;
    const front = Camera.Constants.Type.front;
    const back = Camera.Constants.Type.back;
    this.setState({ cameraPosition: cameraPosition === front ? back : front });
  };

  render() {
    const { hasCameraPermission, cameraPosition } = this.state;
    return (
      <View style={styles.container}>
        <Camera
          style={styles.cameraStyle}
          type={cameraPosition}
          options={cameraOptions}
          ratio="16:9"
        >
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.flipButton}
              onPress={() => this.onFlipCamera()}
            >
              <Text style={styles.flipText}>Flip</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent'
  },
  cameraStyle: { flex: 1, backgroundColor: 'transparent' },
  noPermissionView: {
    flex: 1,
    height: 100,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: { height: 200 },
  buttonsContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: 25,
    marginBottom: 25
  },
  flipButton: { flex: 0.1, alignSelf: 'flex-end', alignItems: 'center' },
  flipText: { fontSize: 20, color: 'white' }
};

const cameraOptions = {
  quality: 5
};
