<template>
    <CommonHeader/>
    <div class="container">
        <CommonTip :contnet="tip"/>
        <div class="content">
            <div>下方虚线框区域内容会有一个错误的访问</div>
            <div class="error-area">
                <TestFallBack/>
            </div>
        </div>
    </div>
    <CommonFooter/>
  <div>
    
  </div>
</template>

<script setup lang="ts">
onErrorCaptured((err) => {
    const route = useRoute()
    console.log('about.vue:', err)
    if(process.server && route.query.csr !== '1'){
        navigateTo({
            path: '/list',
            query: {
                csr: 1
            }
        })
    }
    return false
})
const tip = ref(`
该页面用于测试 <span style="color: blue;font-weight: bold;">降级csr</span> 的使用  <br/>
页面结构： list.vue --> FallBack.vue --> button.vue <br/>
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