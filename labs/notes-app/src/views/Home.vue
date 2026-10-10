<template>
  <div class="note">
    <h2>记事本｜条件+列表+事件+双向绑定</h2>
    <input
      v-model="inputText"
      @keyup.enter="addNote"
      placeholder="输入笔记，回车添加"
    >
    <button @click="addNote">添加笔记</button>
    <button @click="clearAll">清空全部</button>
    <p v-if="noteList.length === 0">暂无笔记，请添加！</p>
    <ul v-else>
      <li v-for="(item, index) in noteList" :key="index">
        {{ index+1 }}. {{ item }}
        <button @click="delNote(index)">删除本条</button>
        <span v-show="item.length > 10" style="color:red">长笔记</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const inputText = ref('')
const noteList = ref([])
const addNote = () => {
  if(inputText.value.trim() === '') return
  noteList.value.push(inputText.value)
  inputText.value = ''
}
const delNote = (idx) => {
  noteList.value.splice(idx,1)
}
const clearAll = () => {
  noteList.value = []
}
</script>
<style scoped>
.note{
  width:580px;
  margin:30px auto;
}
ul{
  list-style: none;
  padding:0;
}
li{
  margin:8px 0;
  display:flex;
  gap:10px;
  align-items:center;
}
button{
  margin:0 4px;
}
</style>
