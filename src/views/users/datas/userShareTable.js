import { h, ref, toRaw } from 'vue'
import { NButton, NSwitch } from 'naive-ui'
import { getPosts } from '@/api/post'
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

  const isCharged = ref(['未充值', '已充值'])

  async function initTableData() {
    loading.value = true
    tableData.value = await getTableData()
    loading.value = false
  }

  function initColumns() {
    columns.value = [
      { title: '昵称', key: 'name', width: 60 },
      { title: '性别', key: 'sex', width: 40 },
      { title: '头像', key: 'headImg', width: 80 },
      { title: '手机号', key: 'mobile', width: 100 },
      { title: '渠道吗', key: 'channelCode', width: 80 },
      { title: '分享码', key: 'shareNo', width: 60 },
      { title: '是否充值', key: 'isRechange', width: 80 },
      { title: '创建时间', key: 'createDate', width: 100 },
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
    isCharged,
    getTableData,
    page,
  }
}
