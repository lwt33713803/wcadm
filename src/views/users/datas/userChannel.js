import { bindPosts } from '@/api/binds'

export const usePostTable = () => {
  async function sendChannelBind(params) {
    try {
      const res = await bindPosts(params)
      console.log(res)
      if (res.code === '200') {
        $message.success('绑定成功!')
      }
    } catch (error) {
      $message.warning('绑定失败!请检查参数')
    }
  }

  return {
    sendChannelBind,
  }
}
