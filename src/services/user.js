import xFetch from '../utils/xFetch';

/**
 * 查询用户列表.
 */
export  function queryUsers() {
  return xFetch('/api/users');
}

/**
 * 删除用户.
 */
export async function deleteUser(params) {
  return xFetch(`/api/users/delete/${params}`);
}

