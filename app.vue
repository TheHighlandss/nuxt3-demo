<template>
    <NuxtPage></NuxtPage>
</template>

<script setup>
onErrorCaptured((err, target, info) => {
    // const nuxtApp = useNuxtApp()
    // nuxtApp.hooks.callHook('vue:error', err)
    // console.dir(err)
    // console.log('target',target);
    // console.log('info',info);

    const routes = useRouter().getRoutes()
    const routePath = useRoute().path

    let fileName = target._.type.__name || ''

    let transformPath = routePath
    let transformFileName = fileName

    if(fileName.includes('[') ){
        transformFileName = fileName.replace(/[\[\]]/g,'')
        transformPath = routePath.replace(/\/\d{1,}/g, `/:${transformFileName}()`)
    }

    if(/index/i.test(fileName)){
        transformFileName = routePath.split('/').pop()
    }

    routes.forEach((route) => {
        if(route.path === transformPath && (route.name.includes(transformFileName))){
            console.log('首页路由发生错误，跳转至自定义错误页面');
            throw createError({
                statusCode: 500,
                statusMessage: err.message,
                fatal: true,
            })
        }
    })
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
