<template>
  <n-form
    ref="formRef"
    :model="model"
    :rules="rules"
    label-placement="left"
    label-width="auto"
    require-mark-placement="right-hanging"
    :size="size"
    :style="{
      width: '50%',
      margin: '0 auto',
      padding: '20px',
      marginTop: '80px',
    }"
  >
    <n-form-item label="手机号" path="mobile">
      <n-input v-model:value="model.mobile" placeholder="请输入手机号码" />
    </n-form-item>

    <n-form-item label="验证码" path="code">
      <n-input v-model:value="model.code" placeholder="请输入验证码" />
    </n-form-item>

    <div style="display: flex; justify-content: flex-end">
      <n-button round type="primary" @click="handleValidateButtonClick"> 绑定 </n-button>
    </div>
  </n-form>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useMessage } from 'naive-ui'
import { usePostTable } from './datas/userChannel'
import { toRaw } from '@vue/reactivity'

const { sendChannelBind } = usePostTable()

export default defineComponent({
  setup() {
    const formRef = ref(null)
    const model = ref({
      mobile: '',
      code: '',
    })
    return {
      formRef,
      model,
      rules: {
        mobile: {
          required: true,
          trigger: ['blur', 'input'],
          message: '请输入手机号码',
        },
        code: {
          required: true,
          trigger: ['blur', 'input'],
          message: '请输入验证码',
        },
      },
      handleValidateButtonClick(e) {
        e.preventDefault()
        formRef.value?.validate((errors) => {
          if (!errors) {
            sendChannelBind(model.value)
          } else {
            message.error('验证失败')
          }
        })
      },
    }
  },
})
</script>
