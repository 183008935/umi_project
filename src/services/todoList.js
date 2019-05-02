import xFetch from '../utils/xFetch';

/**
 * 查询用户列表.
 */
export  function queryTodoList() {
  return xFetch('/api/todoList');
}

export  function addTodo(data) {
  return xFetch('/api/todoList/addTodo', {
    method: 'POST',
    body: data,
  });
}
/**
 * 删除用户.
 */
export  function deleteTodo(params) {
  return xFetch(`/api/todoList/deleteTodo`, {
    method: 'POST',
    body: params,
  });
}
/**
 * 更新状态
 */
export  function editStatus(params) {
  return xFetch(`/api/todoList/editStatus`, {
    method: 'POST',
    body: params,
  });
}
/**
 * 更新状态
 */
export  function editTodoValue(params) {
  return xFetch(`/api/todoList/editTodoValue`, {
    method: 'POST',
    body: params,
  });
}
/**
 * 删除true的数据
 */
export  function deleteTrue() {
  return xFetch(`/api/todoList/deleteTrue`,{
    method: 'POST',
  });
}