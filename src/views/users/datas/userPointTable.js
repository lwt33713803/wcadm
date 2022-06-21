import { h, ref, toRaw, toRef } from 'vue'
import { NButton, NSwitch } from 'naive-ui'
import { getPosts } from '@/api/point'
import { formatDateTime } from '@/utils'

export const usePostTable = () => {
  // refs
  const loading = ref(false)
  const tableData = ref([])
  const columns = ref([])

  const page = ref({
    page: 1,
    limit: 15,
    total: 1,
  })

  async function initTableData() {
    loading.value = true
    tableData.value = await getTableData(toRaw(page.value))
    loading.value = false
  }

  const chargeType = toRef([])

  function initColumns() {
    columns.value = [
      { title: '昵称', key: 'name' },
      { title: '充值类型', key: 'bizType' },
      { title: '积分数量', key: 'num' },
      { title: '收支类型', key: 'incOrExpType' },
      { title: '关联订单号', key: 'originId' },
      { title: '类型', key: 'exBizType' },
      { title: '收支类型', key: 'exType' },
      { title: '创建时间', key: 'createDate' },
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
    getTableData,
    page,
    chargeType,
  }
}
