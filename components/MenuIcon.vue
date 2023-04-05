<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    class="inline-block w-8 h-8 stroke-current"
    :class="styles"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16"
    ></path>
  </svg>
</template>

<script setup lang="ts">
const { styles } = defineProps({
  styles: { type: String, required: false },
});
</script>

<style scoped></style>
