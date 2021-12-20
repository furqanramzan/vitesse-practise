<script setup lang="ts">
const props = defineProps<{ lastName: string }>()
</script>

<template>
  <h3>Props received {{ props.lastName }}</h3>
</template>
