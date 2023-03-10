<template>
  <div>
    <Table v-if="dataTable" :dataTable="dataTable[0]"></Table>
  </div>
</template>

<script setup lang="ts">
import { DataTable } from "~~/types";

const { id } = useRoute().params;
const { data: dataTable } = await useFetch<DataTable[]>(
  `http://localhost:3000/tables/?id=${id}`
);
console.log(dataTable);

if (!dataTable.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
