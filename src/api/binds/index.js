import { defAxios as request } from '@/utils/http'

//获取积分列表
export function getPosts(data = {}) {
  return request({
    url: '/admin/channel/getBindingList',
    method: 'post',
    data,
  })
}

//渠道绑定
export function bindPosts(data = {}) {
  return request({
    url: '/admin/channel/bindingChannel',
    method: 'post',
    data,
  })
}
