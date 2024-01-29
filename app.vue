<template>
    <NuxtPage></NuxtPage>
</template>

<script setup>
onErrorCaptured((err, target, info) => {
    // nuxtApp.hooks.callHook('vue:error', err)
    const nuxtApp = useNuxtApp()
    console.dir(err)
    console.log('stack',err.stack.split('\n'));
    console.log('target', target)
    console.log('info', info)
    // console.log(nuxtApp);
    // console.log(document.querySelector('#__nuxt').innerHTML)
    // console.log(document.querySelector('#__nuxt').hasChildNodes())
    // console.log(document.querySelector('#__nuxt').children.length)
    // console.log(document.querySelector('#__nuxt').childNodes.length)
    // console.log(document.querySelector('#__nuxt').firstChild )
    return false
})
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
