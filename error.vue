<template>
  <div>{{ error }}</div>
  <button @click="handleClearError">Go home</button>
</template>

<script setup lang="ts">
import { NuxtError } from "#app";

const { error } = defineProps({
  error: { type: Object as PropType<NuxtError>, required: true },
});

const handleClearError = () => {
  clearError({ redirect: "/" });
};
</script>

<style scoped></style>
