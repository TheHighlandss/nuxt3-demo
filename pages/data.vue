<template>
  <div>
    <div>下面是展示接口返回来的数据</div>
    <div>{{ data?.data }}</div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/getData')
console.log(data);

if(process.server){
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

</script>

<style lang="scss" scoped>

</style>