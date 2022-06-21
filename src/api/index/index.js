import { defAxios as request } from '@/utils/http'

//获取积分列表
export function getTotals(data = {}) {
  return request({
    url: '/admin/channel/getChannelDetail',
    method: 'post',
    data,
  })
}
//提现申请提交
export function submitWithdraw(data = {}) {
  return request({
    url: '/admin/channel/cashOutChannel',
    method: 'post',
    data,
  })
}
