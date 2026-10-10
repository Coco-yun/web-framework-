<template>
  <div class="note-card">
    <h3>{{ title }}</h3>
    <p>这是一个单文件组件</p>
  </div>
</template>

<script>
export default {
  name: 'NoteCard',
  data() {
    return { title: '我的第一条笔记' }
  }
}
</script>

<style scoped>
.note-card { border: 1px solid #42b883; padding: 10px 16px; border-radius: 6px; }
</style>
