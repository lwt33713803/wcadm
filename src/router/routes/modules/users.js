import { IconMenuTable } from '@/components/AppIcons'
import Layout from '@/layout/index.vue'
import { markRaw } from 'vue'

export default [
  {
    name: 'Users',
    path: '/users',
    component: Layout,
    redirect: '/users',
    meta: {
      title: '统计管理',
      role: ['admin'],
      icon: markRaw(IconMenuTable),
    },
    children: [
      {
        name: 'Share',
        path: 'share',
        component: () => import('@/views/users/userShare.vue'),
        meta: {
          title: '分享用户',
          role: ['admin'],
          icon: markRaw(IconMenuTable),
        },
      },
      {
        name: 'Binds',
        path: 'binds',
        component: () => import('@/views/users/userBinds.vue'),
        meta: {
          title: '绑定列表',
          role: ['admin'],
          icon: markRaw(IconMenuTable),
        },
      },
      {
        name: 'Point',
        path: 'point',
        component: () => import('@/views/users/userPoint.vue'),
        meta: {
          title: '积分记录',
          role: ['admin'],
          icon: markRaw(IconMenuTable),
        },
      },
      {
        name: 'Channel',
        path: 'channel',
        component: () => import('@/views/users/userChannel.vue'),
        meta: {
          title: '渠道绑定',
          role: ['admin'],
          icon: markRaw(IconMenuTable),
        },
      },
      {
        name: 'Withdraw',
        path: 'withdraw',
        component: () => import('@/views/users/userWithdraw.vue'),
        meta: {
          title: '用户提现',
          role: ['admin'],
          icon: markRaw(IconMenuTable),
        },
      },
    ],
  },
]
