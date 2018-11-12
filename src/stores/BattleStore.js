import { types } from 'mobx-state-tree';

const BattleStore = types
  .model('BattleStore', {
    battleId: types.string,
    title: types.string,
    winner: types.string,
    time: types.string,
    voteDays: types.string,
    challenger: types.string,
    defender: types.string
  })
  .actions(self => ({
    onTitleTextChange(text) {},
    onTimeTextChange(text) {},
    onVoteDaysTextChange(text) {}
  }));

export default BattleStore;
