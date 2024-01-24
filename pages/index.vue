<template>
    <h1 class="title">
      index.vue 
    </h1>
    <h2>
      说明： 该项目用于Nuxt的容灾及降级测试
    </h2>
    <div class="container">
      <p>1. 错误处理测试请访问(访问无效变量的场景) <nuxt-link to="/about">错误处理</nuxt-link></p>
    </div>

</template>

<script setup>
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

</script>

<style scoped lang="scss">
.container{
    // color: $theme;
    margin: 20px auto;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-weight: bold;
}
</style>