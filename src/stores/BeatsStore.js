import { types } from 'mobx-state-tree';

const BeatsStore = types.model('BeatsStore', {
  beatId: types.string,
  producer: types.string,
  dateAdded: types.string,
  genre: types.string,
  length: types.string
});

export default BeatsStore;
