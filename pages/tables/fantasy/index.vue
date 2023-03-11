<template>
  <h2>Fantasy</h2>
  <div v-if="dataTable" v-for="t in dataTable">
    <Card
      v-if="t.tags.includes('fantasy') && subtags"
      :subtags="subtags"
      :dataTable="t"
    />
  </div>
</template>

<script setup lang="ts">
import { DataTable, Subtag } from "~~/types";

const { data: dataTable } = await useFetch<DataTable[]>(
  "http://localhost:3000/tables"
);

const { data: subtags } = await useFetch<Subtag[]>(
  `http://localhost:3000/subtags`
);
if (!dataTable.value || !subtags.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
