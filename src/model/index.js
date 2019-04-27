import { queryUsers,deleteUser,addUser } from '../services/user'
import { message } from 'antd';

export default {

  namespace: 'user',

  state: {
    userList: [],
    statistic: {},
  },

  effects: {
    *queryList({ _ }, { call, put }) {
      try { // 加入 try catch 捕获抛错
        const res = yield call(queryUsers);
        yield put({ type: 'saveList', payload: { userList: res.result } });
      } catch (e) {
        message.error('数据获取失败'); // 打印错误信息
      }  
    },
    *addUser({ payload,callback }, { call, put }) {
      try { // 加入 try catch 捕获抛错
        const response = yield call(addUser,payload);
        if (callback && typeof callback === 'function') {
          callback(response)
        }        
      } catch (e) {
        message.error('数据获取失败'); // 打印错误信息
      }  
    },
    *deleteUser({ payload,callback }, { call, put }) {
      try { // 加入 try catch 捕获抛错
        const response = yield call(deleteUser,payload);
        if (callback && typeof callback === 'function') {
          callback(response)
        }
        
      } catch (e) {
        message.error('数据获取失败'); // 打印错误信息
      }  
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