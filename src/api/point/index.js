import { defAxios as request } from '@/utils/http'

//获取积分列表
export function getPosts(data = {}) {
  return request({
    url: '/admin/channel/getIntegralRecordList',
    method: 'post',
    data,
  })
}
