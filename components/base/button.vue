<template>
    <button>
        按钮
        {{ a.b.c }}
    </button>
</template>

<script setup lang="ts">
const a = ref('a')
</script>