<template>
<div style="max-width:760px;margin:10px auto;font-size:14px;">
<h3 style="margin:4px 0">08下半场：事件对象 $event</h3>
<div style="border:1px solid #eee;padding:8px;margin:6px 0;">
<span>1.基础$event <button @click="getEvent($event)">点击获取event</button></span>
<span style="color:red;font-weight:bold;margin-left:8px;">{{msg1}}</span>
</div>
<div style="border:1px solid #eee;padding:8px;margin:6px 0;">
<span>2.鼠标坐标 <div @click="getPos($event)" style="width:220px;height:60px;background:#b8d8ff;display:inline-flex;align-items:center">点击蓝色区域</div></span>
<span style="color:red;font-weight:bold;margin-left:8px;">{{msg2}}</span>
</div>
<div style="border:1px solid #eee;padding:8px;margin:6px 0;">
<span>3.同时传参+$event <button @click="getParam(666,$event)">传参+event</button></span>
<span style="color:red;font-weight:bold;margin-left:8px;">{{msg3}}</span>
</div>
</div>
</template>
<script setup>
import { ref } from 'vue'
const msg1=ref('等待'),msg2=ref('等待'),msg3=ref('等待')
const getEvent=(e)=>{console.log(e);msg1.value=`✅事件类型：${e.type}`}
const getPos=(e)=>{msg2.value=`✅X:${e.clientX} Y:${e.clientY}`}
const getParam=(num,e)=>{console.log(num,e);msg3.value=`✅参数:${num},事件对象已拿到`}
</script>
<style scoped>button{margin:0 3px}</style>
