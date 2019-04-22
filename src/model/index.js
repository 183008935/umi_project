import { queryUsers, queryUser,deleteUser } from '../services';
import { message } from 'antd';
const data =[{
  key: '1',
  name: 'John Brown',
  age: 32,
  enable: 'true',
},
{
  key: '2',
  name: 'Jim Green',
  age: 42,
  enable: 'true',
},
{
  key: '3',
  name: 'Joe Black',
  age: 32,
  enable: 'false',
}]
export default{
    namespace: 'user',
    state: {
        list: []
        person: {},
      },
      
      effects: {
        *queryUsers({ payload }, { call, put }) {
        //   try { // 加入 try catch 捕获抛错
            // console.log(queryUsers,"1")
            // const data = yield call(queryUsers, payload);
            // console.log(data,"2")
            console.log('111');
            
            yield put({ type: 'queryUsersSuccess', payload: data });
            // yield call(delay, 3000);
        
            // const puzzle2 = yield call(request, endPointURI);
            // yield put({ type: 'addNewCard', payload: puzzle2 });
        //   } catch (e) {
        //     message.error('数据获取失败'); // 打印错误信息
        //   }
    
        
        },
       
      },
      reducers: {
        queryUsersSuccess(state, { payload }) {
          return {
            ...state,
            list: payload || [],
          };
        }
}
}