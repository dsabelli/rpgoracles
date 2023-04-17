<template>
  <ContainerMain>
    <div class="hero-content text-center h-screen">
      <div class="max-w-md h-2/3">
        <h1 class="text-8xl font-bold">{{ error.statusCode }}</h1>
        <p class="py-6 text-xl">{{ error.statusMessage }}</p>
        <button class="btn btn-primary text-white" @click="handleClearError">
          Go home
        </button>
      </div>
    </div>
  </ContainerMain>
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
