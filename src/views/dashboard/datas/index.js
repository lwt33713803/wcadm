import { h, ref, toRaw } from 'vue'
import { getTotals, submitWithdraw } from '@/api/index'
import { useDialog, useMessage } from 'naive-ui'
//统计余额
export const userTotal = () => {
  const totalData = ref({
    amount_total: 0, //余额
    regist_total: 0, //注册数
    total_total: 0, //业绩
  })

  const parseCurrency = (input) => {
    const nums = input.replace(/(,|¥|\s)/g, '').trim()
    if (/^\d+(\.(\d+)?)?$/.test(nums)) return Number(nums)
    return nums === '' ? null : Number.NaN
  }
  const formatCurrency = (value) => {
    if (value === null) return ''
    return `${value.toLocaleString('en-US')} ¥`
  }

  async function getTotal() {
    try {
      const res = await getTotals()
      if (res.code === '200') {
        totalData.value.amount_total = res.data.amount
        totalData.value.regist_total = res.data.registerSum
        totalData.value.total_total = res.data.turnover
      }
    } catch (error) {
      console.error(error)
    }
  }

  const showMessage = useMessage()
  const amount = ref(0)
  let showModal = ref(false)
  async function submitAction() {
    try {
      const res = await submitWithdraw({ num: amount.value })
      showModal = false
      showMessage.success('提现申请已经提交，等待系统审核')
    } catch (error) {
      console.log('1111')
    }
  }

  function openWithdrawModel() {
    //显示弹窗
    dialog.warning({
      title: '使用渲染函数',
      content: () => 'Content',
      action: () => 'Action',
    })
  }

  return {
    totalData,
    getTotal,
    openWithdrawModel,
    parseCurrency,
    formatCurrency,
    amount,
    submitAction,
    showModal,
  }
}
