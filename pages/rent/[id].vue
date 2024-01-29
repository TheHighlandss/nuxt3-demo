<template>
    <CommonHeader/>
    <div class="container">
        <CommonTip :contnet="tip"/>
        <div class="content">
            <div>下方虚线框区域内容会有一个错误的访问</div>
            <div class="error-area">
                <TestReadError/>
            </div>
        </div>
    </div>
    <CommonFooter/>
  <div>
    
  </div>
</template>

<script setup lang="ts">
const a = ref(1)
// onErrorCaptured((err, target, info) => {
//     // nuxtApp.hooks.callHook('vue:error', err)
//     nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
//     console.log('about.vue:', err)
//     return false
// })
// const a = b
const tip = ref(`
该页面用于测试 <span style="color: blue;font-weight: bold;">单纯添加错误处理</span> 的使用  <br/>
页面结构： about.vue --> readErr.vue --> button.vue <br/>
其中 button.vue 中会有一个错误的访问 <br/>
`)
</script>

<style lang="scss" scoped>
.container{
    height: 700px;
    display: flex;
    flex-direction: column;
    text-align: center;

    .content{
        flex: 1;
    }

    .error-area{
        margin: 20px 120px 130px ;
        padding: 50px;
        border: 1px dashed #000;
    }
}
</style>