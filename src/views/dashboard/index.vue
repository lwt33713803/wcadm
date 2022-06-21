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
      <div flex items-center mt20>
        <n-grid x-gap="12" :cols="3">
          <n-gi>
            <n-card title="金额总计">
              {{ Number.parseFloat(totalData.amount_total).toFixed(2) }}
              <n-button ml20 @click="showModal = true">余额提现</n-button>
            </n-card>
          </n-gi>
          <n-gi>
            <n-card title="邀请总计"> {{ totalData.regist_total }} </n-card>
          </n-gi>
          <n-gi>
            <n-card title="业绩统计">{{ totalData.total_total }} </n-card></n-gi
          >
        </n-grid>
      </div>
    </n-card>

    <n-modal v-model:show="showModal">
      <n-card style="width: 600px" title="余额提现" :bordered="false" size="huge" role="dialog" aria-modal="true">
        <template #header-extra>可用余额： {{ Number.parseFloat(totalData.amount_total).toFixed(2) }}</template>
        <n-space vertical>
          <n-input-number
            v-model:value="amount"
            :max="totalData.amount_total"
            min="100"
            :parse="parseCurrency"
            :format="formatCurrency"
          />
          <n-button type="primary" @click="submitAction"> 提交申请 </n-button>
        </n-space>
        <template #footer> 最小提现金额：100；我们会在2～6个工作日内处理并审核相关提现申请 </template>
      </n-card>
    </n-modal>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { useUserStore } from '@/store/modules/user'
import { userTotal } from './datas/index'

const userStore = useUserStore()

const { getTotal, totalData, openWithdrawModel, parseCurrency, formatCurrency, amount, submitAction, showModal } =
  userTotal()

onBeforeMount(() => {
  getTotal()
})
</script>

<style lang="scss" scoped></style>
