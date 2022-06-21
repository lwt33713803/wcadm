import { h, ref, toRaw } from 'vue'
import { NButton, NSwitch } from 'naive-ui'
import { getPosts } from '@/api/withdraw'
import { formatDateTime } from '@/utils'

export const usePostTable = () => {
  // refs
  const loading = ref(false)
  const tableData = ref([])
  const columns = ref([])
  const page = ref({
    page: 1,
    limit: 10,
    total: 1,
  })

  const states = ref(['未知', '提现中', '驳回', '已处理'])

  async function initTableData() {
    loading.value = true
    tableData.value = await getTableData()
    loading.value = false
  }

  function initColumns() {
    columns.value = [
      { title: '渠道账号', key: 'userId', width: 60 },
      { title: '提现状态', key: 'status', width: 40 },
      { title: '创建时间', key: 'createTime', width: 80 },
      { title: '更新时间', key: 'updateTime', width: 100 },
      { title: '订单号', key: 'no', width: 80 },
      { title: '提现金额', key: 'num', width: 60 },
    ]
  }

  async function getTableData(data = toRaw(page.value)) {
    try {
      const res = await getPosts(data)
      if (res.code === '200') {
        page.value.total = Math.ceil(res.count / page.value.limit)
        return res.data
      }
      console.warn(res.message)
      return []
    } catch (error) {
      console.error(error)
      return []
    }
  }

  return {
    loading,
    columns,
    tableData,
    initColumns,
    initTableData,
    states,
    getTableData,
    page,
  }
}
