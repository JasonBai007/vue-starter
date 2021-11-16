// 复制指令
// 使用示例：
// v-copy="'要复制的内容'"
// v-copy="某个变量"

export default {
  inserted(el, binding) {
    let info = binding.value;
    el.onclick = (e) => {
      if (navigator.clipboard) {
        // clipboard api, 不兼容IE浏览器
        navigator.clipboard.writeText(info);
      } else {
        // 传统方法，兼容IE浏览器
        // 动态创建 textarea 标签
        const textarea = document.createElement('textarea')
        // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
        textarea.readOnly = 'readonly'
        textarea.style.position = 'absolute'
        textarea.style.left = '-9999px'
        textarea.value = info
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('Copy')
        document.body.removeChild(textarea)
      }
      alert('复制成功')
    }
  },
}
