
<template>
  <div>
    <div>正常内容..</div>
    <div>下面有一段错误访问 a.b.c 其中 a为字符串类型</div>
    <BaseButton/>
    <div>这是出错访问后面的正常内容..</div>
  </div>
</template>

<script setup lang="ts">
onErrorCaptured((err) => {
    console.log('FallBack.vue :', err)
    // return false
})
</script>

<style lang="scss" scoped>

</style>