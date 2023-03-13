<template>
  <h2>General Index</h2>
  <div v-if="dataTable" v-for="t in dataTable">
    <Card
      v-if="t.tag === 'general' && subtags"
      :subtags="subtags"
      :dataTable="t"
    />
  </div>
</template>

<script setup lang="ts">
import { DataTable, Subtag } from "~~/types";

const { data: dataTable } = await useFetch<DataTable[]>(
  "http://localhost:3001/tables"
);

const { data: subtags } = await useFetch<Subtag[]>(
  `http://localhost:3001/subtags`
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
