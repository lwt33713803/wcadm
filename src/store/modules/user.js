import { defineStore } from 'pinia'
import { createLocalStorage } from '@/utils/cache'
import { removeToken } from '@/utils/token'

export const useUserStore = defineStore('user', {
  state() {
    return {
      userInfo: {},
    }
  },
  getters: {
    userId() {
      return this.userInfo?.id
    },
    name() {
      return this.userInfo?.name
    },
    avatar() {
      return this.userInfo?.avatar
    },
    role() {
      return this.userInfo?.role || []
    },
  },
  actions: {
    async getUserInfo() {
      try {
        // const res = await getUser();
        // if (res.code === 0) {
        // const { id, name, avatar, role } = res.data
        // this.userInfo = { id, name, avatar, role }
        const ls = createLocalStorage({ prefixKey: 'login_' })
        const lsLoginInfo = ls.get('loginInfo')
        this.userInfo = {
          id: 1,
          name: lsLoginInfo.username,
          avatar: 'https://assets.qszone.com/images/avatar.jpg',
          email: 'Ronnie@123.com',
          role: ['admin'],
        }
        return Promise.resolve({
          id: 1,
          name: lsLoginInfo.username,
          avatar: 'https://assets.qszone.com/images/avatar.jpg',
          email: 'Ronnie@123.com',
          role: ['admin'],
        })
        // } else {
        // return Promise.reject(res.message)
        // }
      } catch (error) {
        console.error(error)
        return Promise.reject(error.message)
      }
    },
    logout() {
      removeToken()
      this.userInfo = {}
    },
    setUserInfo(userInfo = {}) {
      this.userInfo = { ...this.userInfo, ...userInfo }
    },
  },
})
