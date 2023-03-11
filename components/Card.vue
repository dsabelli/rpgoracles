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

//loop through all subtags, if the current route path includes
//a subtag, then it is not a parent path, so return false, else true
const isParentPath = (subtags: Subtag[]): boolean => {
  for (let tag of subtags) {
    if (route.path.includes(tag.subtag)) return false;
  }
  return true;
};

//if user is currently on a [document].vue page, add the id onto the end of the path
//if the user is currently on a parent path and has subtags add the first subtag to the route,
//else go to the specific documents path
const path = route.params.document
  ? `${route.path}-${dataTable.id}`
  : isParentPath(subtags) && dataTable.subtags.length
  ? `${route.path}/${dataTable.subtags[0]}/${dataTable.document}-${dataTable.id}`
  : `${route.path}/${dataTable.document}-${dataTable.id}`;
</script>

<style scoped></style>
