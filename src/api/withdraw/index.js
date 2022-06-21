import { defAxios as request } from '@/utils/http'

//获取分享用户列表
export function getPosts(data = {}) {
  return request({
    url: '/admin/channel/getCashOutList',
    method: 'post',
    data,
  })
}

export function savePost(id, data = {}) {
  if (id) {
    return request({
      url: `/post/${id}`,
      method: 'put',
      data,
    })
  }

  return request({
    url: '/post',
    method: 'post',
    data,
  })
}
