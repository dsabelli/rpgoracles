<template>
  <div class="min-h-screen">
    <Hero />
    <div class="h-1/4">{{ info }}</div>
  </div>
</template>

<script setup lang="ts">
const { data: api } = await useFetch("/api/hiMom");
const info = ref(api);
</script>

<style scoped></style>
