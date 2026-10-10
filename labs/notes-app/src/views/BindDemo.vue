<!-- src/views/BindDemo.vue -->
<template>
  <h2>任务3a：内容、属性、事件绑定</h2>
  <!-- 1.内容插值绑定 -->
  <p>文本内容：{{ msg }}</p>

  <!-- 2.属性绑定 v-bind简写 : -->
  <img :src="imgUrl" width="220" alt="图片">

  <!-- 3.事件绑定 v-on简写 @ -->
  <button @click="changeText">点击修改文字</button>
  <button @click="changeImg">切换图片</button>
</template>

<script setup>
import { ref } from 'vue'
// 响应式数据
const msg = ref('初始文字内容')
const imgUrl = ref('https://picsum.photos/id/237/220/160')

// 事件方法
const changeText = () => {
  msg.value = '✅文字已经被点击修改！'
}
const changeImg = () => {
  imgUrl.value = 'https://picsum.photos/id/10/220/160'
}
</script>
