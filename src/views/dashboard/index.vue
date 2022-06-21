<template>
  <div>
    <n-card>
      <div flex items-center>
        <img width="60" style="border-radius: 50%" :src="userStore.avatar" />
        <div ml20>
          <p text-16>Hello, {{ userStore.name }}</p>
          <p op80 text-12 mt5>今天又是元气满满的一天</p>
        </div>
      </div>
      <div flex items-center>
        <n-grid x-gap="12" :cols="3">
          <n-gi>
            <n-card title="卡片">1 </n-card>
          </n-gi>
          <n-gi>
            <n-card title="卡片"> 2 </n-card>
          </n-gi>
          <n-gi> <n-card title="卡片">3 </n-card></n-gi>
        </n-grid>
      </div>
    </n-card>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/modules/user'
import { userTotal } from './datas/index'

const userStore = useUserStore()
</script>

<style lang="scss" scoped></style>
