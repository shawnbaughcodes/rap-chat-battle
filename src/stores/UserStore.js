import { types } from 'mobx-state-tree';
import { state } from '../stubDataState';
import { AsyncStorage } from 'react-native';
import { Facebook, Google } from 'expo';
import appKey from '../../appKey';

const UserStore = types
  .model('UserStore', {
    userId: types.string,
    facebookToken: types.maybeNull(types.string),
    googleToken: types.maybeNull(types.string),
    firstName: types.string,
    lastName: types.string,
    email: types.string,
    stageName: types.maybeNull(types.string), // RAPPER ID'S
    isRapper: types.boolean,
    battles: types.maybeNull(types.array(types.map(types.string))), // BATTLE ID'S
    likedRappers: types.array(types.map(types.string)), // RAPPER ID'S
    favoriteBattles: types.array(types.map(types.string)) // BATTLE ID'S
  })
  .actions(self => ({
    async onFaceBookAuth(props) {
      const token = await AsyncStorage.getItem('facebook_token');
      if (token) {
        this.setToken('facebook', token);
        return props.navigation.navigate('feed');
      } else {
        this.doFaceBookLogin();
      }
    },
    async doFaceBookLogin() {
      const { token, type } = await Facebook.logInWithReadPermissionsAsync(
        appKey.facebook,
        {
          permissions: ['public_profile', 'email', 'user_photos']
        }
      );
      if (type === 'cancel') {
        self.facebookToken = null;
      } else {
        this.setToken('facebook', token);
        await AsyncStorage.setItem('facebook_token', token);
      }
    },
    async onGoogleAuth(props) {
      const token = await AsyncStorage.getItem('google_token');
      if (token) {
        self.googleToken = token;
        return props.navigation.navigate('feed');
      } else {
        this.doGoogleLogin();
      }
    },
    async doGoogleLogin() {
      const result = await Google.logInAsync({
        androidClientId: appKey.googleAndroid,
        iosClientId: appKey.googleIOS,
        scopes: ['profile', 'email']
      });
      if (type === 'succss') {
        this.setToken('google', result.accessToken);
        await AsyncStorage.setItem('google_token', result.accessToken);
      } else {
        this.setToken('google', null);
      }
    },
    setToken(type, token) {
      if (type === 'google') {
        self.googleToken = token;
      } else {
        self.facebookToken = token;
      }
    }
  }));

export default UserStore.create(state.user);
