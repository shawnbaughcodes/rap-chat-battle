import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { observer } from 'mobx-react';
import { NavigationActions } from 'react-navigation';

import user from '../stores/UserStore';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

@observer
class LoginScreen extends Component {
  componentWillMount() {
    if (user.facebookToken || user.googleToken) {
      this.props.navigation.navigate('feed');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Rap Chat</Text>
        <Text style={styles.Login}>Login</Text>
        <TouchableOpacity
          style={styles.FacebookContainer}
          onPress={() => user.onFaceBookAuth(this.props)}
        >
          <Text style={styles.Facebook}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.GoogleContainer}
          onPress={() => user.onGoogleAuth(this.props)}
        >
          <Text style={styles.Google}>Google</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: SCREEN_HEIGHT,
    backgroundColor: '#333'
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginBottom: 30
  },
  Login: {
    fontSize: 50,
    color: 'gray',
    marginBottom: 100
  },
  Facebook: {
    fontSize: 20
  },
  FacebookContainer: {
    backgroundColor: 'blue',
    width: SCREEN_WIDTH / 1.5,
    borderRadius: 70,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 15
  },
  Google: {
    fontSize: 20
  },
  GoogleContainer: {
    backgroundColor: '#EBEBEB',
    width: SCREEN_WIDTH / 1.5,
    borderRadius: 70,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10
  }
};

export default LoginScreen;
