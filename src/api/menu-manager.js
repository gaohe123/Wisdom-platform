import request from '@/utils/request'

/**
 * 获取菜单列表
 * @param data
 * @returns {AxiosPromise}
 */
const getMenuList = (data = {}) => {
  return request({
    url: '/menu/list',
    method: 'GET',
    data
  })
}

export default {
  getMenuList
}
