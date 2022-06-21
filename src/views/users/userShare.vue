<template>
  <div p24>
    <n-table :bordered="false" :single-line="false" striped>
      <thead>
        <tr>
          <th><n-checkbox></n-checkbox></th>
          <th v-for="(title, index) in columns" :key="index">
            {{ title.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(title, index) in tableData" :key="index">
          <td><n-checkbox> </n-checkbox></td>
          <td>{{ title.name }}</td>
          <td>{{ title.sex }}</td>
          <td>
            <n-image width="80" :src="title.headImg" />
          </td>
          <td>{{ title.mobile }}</td>
          <td>{{ title.channelCode }}</td>
          <td>{{ title.shareNo }}</td>
          <td>
            <n-tag v-if="title.isRechange == 0" :bordered="false" type="warning">
              {{ isCharged[title.isRechange] }}
            </n-tag>
            <n-tag v-else :bordered="false">
              {{ isCharged[title.isRechange] }}
            </n-tag>
          </td>
          <td>{{ formatDateTime(title.createdTime) }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="9" style="text-align: right">
            <n-pagination v-model:page="pagination" :page-count="page.total" />
          </td>
        </tr>
      </tfoot>
    </n-table>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, watch, toRaw } from 'vue'
import { formatDateTime } from '../../utils'
import { usePostTable } from './datas/userShareTable'

const pagination = ref(1)

watch(pagination, (newVal, oldVal) => {
  const param = toRaw(page.value)
  param.page = newVal
  const res = getTableData(param).then((res) => {
    tableData.value = res
  })
})

const { loading, columns, tableData, initColumns, initTableData, isCharged, getTableData, page } = usePostTable()

onBeforeMount(() => {
  initColumns()
  initTableData()
})
</script>

<style lang="scss" scoped>
.action-btns {
  display: flex;
}
</style>
