<template>
  <div class="card w-64 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img :src="props.dataTable.image" alt="Shoes" class="rounded-xl w-48" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">{{ props.dataTable.name }}</h2>
      <p>{{ props.dataTable.description }}</p>
      <div class="card-actions">
        <button class="btn btn-primary">
          <NuxtLink :to="`${path}/${props.dataTable.id}`">Read More</NuxtLink>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DataTable, OracleTable } from "~~/types";
const route = useRoute();
const path = route.fullPath;

const props = defineProps({
  dataTable: { type: Object as PropType<DataTable>, required: true },
});
</script>

<style scoped></style>
