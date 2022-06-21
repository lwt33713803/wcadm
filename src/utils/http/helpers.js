import { useUserStore } from '@/store/modules/user'

const WITHOUT_TOKEN_API = [{ url: '/login/password', method: 'POST' }]

export function isWithoutToken({ url, method = '' }) {
  return WITHOUT_TOKEN_API.some((item) => url.startsWith(item.url))
}

export function addBaseParams(params) {
  if (!params.userId) {
    params.userId = useUserStore().userId
  }
}
