<!-- src/views/ModelDemo.vue -->
<template>
  <h2>任务：v-model 双向数据绑定</h2>

  <!-- 双向绑定输入框 -->
  <p>你输入的内容：{{ inputText }}</p>
  <input v-model="inputText" placeholder="在这里打字试试" />

  <p>勾选状态：{{ isCheck }}</p>
  <input type="checkbox" v-model="isCheck"> 同意协议
</template>

<script setup>
import { ref } from 'vue'
const inputText = ref('')
const isCheck = ref(false)
</script>
