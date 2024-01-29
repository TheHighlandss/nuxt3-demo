<template>
  <div>
    自定义错误页面error: {{ error}}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    error: any
}>()

console.log('errorpage',props.error);
console.dir(props.error);

// if(props.error.statusCode === 404){
//     navigateTo({
//         path: useRoute().path,
//         query: {
//             csr: 1
//         }
//     })
// }
</script>