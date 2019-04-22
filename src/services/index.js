import xFetch from '../utils/xFetch';

/**
 * 查询用户列表.
 */
export async function queryUsers() {
  return xFetch('/api/users');
}
