<!-- src/views/About.vue -->
<template>
  <h1>关于页面</h1>
  <!-- 插值表达式 {{}} -->
  <p>姓名：{{username}}</p>
  <p>数字：{{count}}</p>
  <button @click="count++">点我+1</button>
</template>

<script setup>
// 响应式ref
import { ref } from 'vue'
const username = ref("小明")
const count = ref(0)
</script>
