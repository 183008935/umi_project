import xFetch from '../utils/xFetch';

/**
 * 查询用户列表.
 */
export  function queryUsers() {
  return xFetch('/api/users');
}
export  function addUser(data) {
  return xFetch('/api/users/addUser', {
    method: 'POST',
    body: data,
  });
}
/**
 * 删除用户.
 */
export  function deleteUser(params) {
  return xFetch(`/api/users/delete`, {
    method: 'POST',
    body: params,
  });
}

