import xFetch from '../utils/xFetch';

/**
 * 查询用户列表.
 */
export  function queryUsers() {
  return xFetch('/api/users');
}

