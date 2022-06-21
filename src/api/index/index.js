import { defAxios as request } from '@/utils/http'

//获取积分列表
export function getTotals(data = {}) {
  return request({
    url: '/admin/channel/getChannelDetail',
    method: 'post',
    data,
  })
}
