import { queryUsers } from '../services/user'

export default {

  namespace: 'user',

  state: {
    userList: [],
    statistic: {},
  },

  effects: {
    *queryList({ _ }, { call, put }) {
      const res = yield call(queryUsers);
      console.log('queryUsers');
      console.log(res);
      yield put({ type: 'saveList', payload: { userList: res.result } });
    },
  },

  reducers: {
    saveList(state, { payload: { userList } }) {
      return {
        ...state,
        userList,
      }
    },
  },
};
