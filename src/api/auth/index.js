import { defAxios as request, formAxios as formRequest } from '@/utils/http'

export const login = (data) => {
  return formRequest({
    url: '/login/password?username=' + data.username + '&password=' + data.password,
    method: 'post',
    data,
  })
}

export const refreshToken = () => {
  // return request({
  //   url: '/auth/refreshToken',
  //   method: 'post',
  // })
}
