import React from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rap Chat</Text>
      <Text style={styles.Login}>Login</Text>
      <TouchableOpacity style={styles.FacebookContainer}>
        <Text style={styles.Facebook}>Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.GoogleContainer}>
        <Text style={styles.Google}>Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: { alignItems: 'center' },
  title: {
    color: 'white',
    fontSize: 30,
    marginBottom: 40
  },
  Login: {
    fontSize: 50,
    color: 'gray',
    marginBottom: 20
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
    marginBottom: 10
  },
  Google: {
    fontSize: 20
  },
  GoogleContainer: {
    backgroundColor: 'white',
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
