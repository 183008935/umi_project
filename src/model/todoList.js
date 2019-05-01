import { queryTodoList,deleteTodo,addTodo,editStatus } from '../services/todoList'
import { message } from 'antd';

export default {

  namespace: 'todoList',

  state: {
    todoList: [],
    statistic: {},
  },

  effects: {
    *queryList({ _ }, { call, put }) {
      try { // 加入 try catch 捕获抛错
        const res = yield call(queryTodoList);
        yield put({ type: 'saveList', payload: { todoList: res.result } });
      } catch (e) {
        message.error('数据获取失败'); // 打印错误信息
      }  
    },
    *addTodo({ payload,callback }, { call, put }) {
      try { // 加入 try catch 捕获抛错
        const response = yield call(addTodo,payload);
        if (callback && typeof callback === 'function') {
          callback(response)
        }        
      } catch (e) {
        message.success('添加成功'); // 打印错误信息
      }  
    },
    *deleteTodo({ payload,callback }, { call, put }) {
      try { // 加入 try catch 捕获抛错
      const response = yield call(deleteTodo,payload);
        if (callback && typeof callback === 'function') {
          callback(response)
        }
      } catch (e) {
        message.success('删除成功'); // 打印错误信息
      }  
    },
    *editStatus({ payload,callback }, { call, put }) {
      try { // 加入 try catch 捕获抛错
      const response = yield call(editStatus,payload);
        if (callback && typeof callback === 'function') {
          callback(response)
        }
      } catch (e) {
        message.success('更新状态成功'); // 打印错误信息
      }  
    },
  },

  reducers: {
    saveList(state, { payload: { todoList } }) {
      return {
        ...state,
        todoList,
      }
    },
  },
};