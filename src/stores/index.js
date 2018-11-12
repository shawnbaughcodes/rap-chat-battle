import { types } from 'mobx-state-tree';
import UserStore from './UserStore';
import BattleStore from './BattleStore';
import BeatsStore from './BeatsStore';

const AppStore = types
  .model('AppStore', {
    user: UserStore,
    battles: types.array(BattleStore),
    beats: types.array(BeatsStore)
  })
  .actions(self => ({}));

export default AppStore.create();
