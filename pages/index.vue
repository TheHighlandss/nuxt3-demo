<template>
    <div class="container">
        this is index page
        <img src="/favicon.ico" alt="">
        <img src="../assets/images/working.png" alt="">
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
    color: $theme;
}
</style>