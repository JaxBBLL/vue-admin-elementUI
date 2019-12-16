import * as types from './mutations-types';

export default {
  updateUser: ({
    commit
  }, user) => {
    commit(types.UPDATE_USER, user);
  }
};
