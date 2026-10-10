<!-- src/views/IfShowDemo.vue -->
<template>
  <h2>任务：v-if / v-show 条件渲染</h2>

  <h3>v-if：直接删除/创建DOM</h3>
  <button @click="toggleIf">切换v-if显示</button>
  <p v-if="showIf">✅ v-if 显示的文字</p>

  <h3>v-show：css隐藏，DOM还在</h3>
  <button @click="toggleShow">切换v-show显示</button>
  <p v-show="showShow">✅ v-show 显示的文字</p>
</template>

<script setup>
import { ref } from 'vue'
const showIf = ref(true)
const showShow = ref(true)

const toggleIf = () => {
  showIf.value = !showIf.value
}
const toggleShow = () => {
  showShow.value = !showShow.value
}
</script>
