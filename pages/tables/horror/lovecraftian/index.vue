<template>
  <h2>Lovecraftian Horror</h2>
  <div v-if="dataTable" v-for="t in dataTable">
    <Card v-if="t.subtag === 'lovecraftian'" :dataTable="t" />
  </div>
</template>

<script setup lang="ts">
import { DataTable } from "~~/types";

const { data: dataTable } = await useFetch<DataTable[]>(
  "http://localhost:3001/tables"
);

if (!dataTable.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
