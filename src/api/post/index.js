import { defAxios as request } from '@/utils/http'

//获取分享用户列表
export function getPosts(data = {}) {
  return request({
    url: '/admin/channel/getChannelUserList',
    method: 'post',
    data,
  })
}

export function getPostById({ id }) {
  return request({
    url: `/post/${id}`,
    method: 'post',
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

export function deletePost(id) {
  return request({
    url: `/post/${id}`,
    method: 'delete',
  })
}
