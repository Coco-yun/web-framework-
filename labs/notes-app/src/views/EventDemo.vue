<template>
<div style="max-width:780px;margin:10px auto;font-size:14px;">
<h3 style="margin:4px 0">2.4$event +2.5事件修饰符</h3>
<div style="border:1px solid #eee;padding:8px;margin:6px 0;">
<span>1.$event <button @click="handleClick($event)">打印event</button></span>
<span style="color:red;font-weight:bold;margin-left:8px;">{{msg1}}</span>
</div>
<div style="border:1px solid #eee;padding:8px;margin:6px 0;">
<span>2.stop冒泡 <div @click="outer" style="background:#b8d8ff;padding:6px;display:inline-block">外层 <button @click.stop="inner">按钮</button></div></span>
<span style="color:red;font-weight:bold;margin-left:8px;">{{msg2}}</span>
</div>
<div style="border:1px solid #eee;padding:8px;margin:6px 0;">
<span>3.prevent <a href="vue.org" @click.prevent="linkClick">点链接</a></span>
<span style="color:red;font-weight:bold;margin-left:8px;">{{msg3}}</span>
</div>
<div style="border:1px solid #eee;padding:8px;margin:6px 0;">
<span>4.once <button @click.once="onceClick">仅一次</button></span>
<span style="color:red;font-weight:bold;margin-left:8px;">{{msg4}}</span>
</div>
<div style="border:1px solid #eee;padding:8px;margin:6px 0;">
<span>5.self <div @click.self="selfClick" style="background:#ccc;padding:6px;display:inline-block">盒子<button>按钮</button></div></span>
<span style="color:red;font-weight:bold;margin-left:8px;">{{msg5}}</span>
</div>
<div style="border:1px solid #eee;padding:8px;margin:6px 0;">
<span>6.按键 <input type="text" @keyup.enter="enterFn" @keyup.esc="escFn" placeholder="回车/ESC" style="width:140px"></span>
<span style="color:red;font-weight:bold;margin-left:8px;">{{msg6}}</span>
</div>
</div>
</template>
<script setup>
import { ref } from 'vue'
const msg1=ref('等待'),msg2=ref('等待'),msg3=ref('等待'),msg4=ref('等待'),msg5=ref('等待'),msg6=ref('等待')
const handleClick=(e)=>{console.log(e);msg1.value='✅拿到event'}
const outer=()=>{msg2.value='🟦外层触发'}
const inner=()=>{msg2.value='🟩stop阻断冒泡'}
const linkClick=()=>{msg3.value='✅不跳转'}
const onceClick=()=>{msg4.value='✅只一次'}
const selfClick=()=>{msg5.value='✅self触发'}
const enterFn=()=>{msg6.value='⌨️Enter'}
const escFn=()=>{msg6.value='⌨️ESC'}
</script>
<style scoped>button{margin:0 3px}</style>
