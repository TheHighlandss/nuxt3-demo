<template>
  <div class="tip" v-if="contnet" v-html="contnet">
  </div>
</template>

<script setup lang="ts">
defineProps<{
    contnet: string
}>()
</script>

<style lang="scss" scoped>
.tip{
    background-color: rgb(255, 65, 65);
    color: #fff;
    padding: 10px 20px;
    margin: 20px auto;
    width: max-content;
    border-radius: 12px;
}
</style>