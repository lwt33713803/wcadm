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
          <td>{{ title.userId }}</td>
          <td>{{ states[title.status] }}</td>
          <td>{{ title.createTimeLong == 0 ? '-' : formatDateTime(title.createTimeLong) }}</td>
          <td>{{ title.updateTimeLong == 0 ? '-' : formatDateTime(title.updateTimeLong) }}</td>
          <td>{{ title.no }}</td>
          <td>{{ title.num }}</td>
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
import { usePostTable } from './datas/userWithdraw'

const pagination = ref(1)

watch(pagination, (newVal, oldVal) => {
  const param = toRaw(page.value)
  param.page = newVal
  const res = getTableData(param).then((res) => {
    tableData.value = res
  })
})

const { loading, columns, tableData, initColumns, initTableData, states, getTableData, page } = usePostTable()

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
