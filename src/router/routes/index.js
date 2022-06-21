import Layout from '@/layout/index.vue'
import Home from '@/views/dashboard/index.vue'

import {
  IconAlert,
  IconChart,
  IconGitee,
  IconGithub,
  IconHome,
  IconLink,
  IconMenu,
  IconVue,
} from '@/components/AppIcons'

export const basicRoutes = [
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    isHidden: true,
  },
  {
    name: 'REDIRECT',
    path: '/redirect',
    component: Layout,
    isHidden: true,
    children: [
      {
        name: 'REDIRECT_NAME',
        path: '',
        component: () => import('@/views/redirect/index.vue'),
      },
    ],
  },
  {
    name: 'LOGIN',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    isHidden: true,
    meta: {
      title: '登录页',
    },
  },

  {
    name: 'Dashboard',
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: {
      title: 'Dashboard',
      icon: IconChart,
    },
    children: [
      {
        name: 'Home',
        path: 'home',
        component: Home,
        meta: {
          title: '首页',
          icon: IconHome,
        },
      },
    ],
  },
]

export const NOT_FOUND_ROUTE = {
  name: 'NotFound',
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  isHidden: true,
}

const modules = import.meta.globEager('./modules/*.js')
const asyncRoutes = []
Object.keys(modules).forEach((key) => {
  asyncRoutes.push(...modules[key].default)
})

export { asyncRoutes }
