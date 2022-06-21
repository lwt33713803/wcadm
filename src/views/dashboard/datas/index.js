import { getPosts } from '@/api/index'
//统计余额
export const userTotal = () => {
  const totalData = ref({
    amount_total: 0, //余额
    regist_total: 0, //注册数
    total_total: 0, //业绩
  })

  async function getTotals() {
    try {
      const res = await getTotals()
      if (res.code === '200') {
        totalData.amount_total = 0
        totalData.regist_total = 0
        totalData.total_total = 0
      }
    } catch (error) {
      console.error(error)
    }
  }
  return {
    totalData,
  }
}
