<template>
  <div class="card w-64 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img :src="dataTable.image" alt="Shoes" class="rounded-xl w-48" />
    </figure>
    <div class="card-body items-center text-center">
      <NuxtLink :to="`${path}/${dataTable.document}-${dataTable.id}`">
        <h2 class="card-title">{{ dataTable.name }}</h2></NuxtLink
      >
      <p>{{ dataTable.description }}</p>
      <div class="card-actions">
        <NuxtLink :to="`${path}/${dataTable.document}-${dataTable.id}`"
          ><button class="btn btn-primary">Read More</button></NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DataTable, OracleTable } from "~~/types";
const route = useRoute();
const path = route.fullPath;

const { dataTable } = defineProps({
  dataTable: { type: Object as PropType<DataTable>, required: true },
});
</script>

<style scoped></style>
