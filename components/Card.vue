<template>
  <div class="card w-64 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img :src="dataTable.image" alt="Shoes" class="rounded-xl w-48" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">{{ dataTable.name }}</h2>
      <p>{{ dataTable.description }}</p>
      <div class="card-actions">
        <NuxtLink :to="path"
          ><button class="btn btn-primary">Read More</button></NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DataTable, Subtag } from "~~/types";
const route = useRoute();

const { dataTable, subtags } = defineProps({
  dataTable: { type: Object as PropType<DataTable>, required: true },
  subtags: { type: Array as PropType<Subtag[]>, required: true },
});
console.log(subtags);

const parentPath = (): boolean => {
  for (let tag of subtags) {
    if (dataTable.subtags.includes(tag.subtag)) return true;
  }
  return false;
};

const path = route.params.document
  ? `${route.path}-${dataTable.id}`
  : parentPath()
  ? `${route.path}/${dataTable.subtags[0]}/${dataTable.document}-${dataTable.id}`
  : `${route.path}/${dataTable.document}-${dataTable.id}`;
</script>

<style scoped></style>
