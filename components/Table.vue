<template>
  <div class="overflow-x-auto">
    {{ dataTable.name }}
    <table
      class="table table-compact table-zebra w-full z-0"
      v-if="dataTable"
      :key="dataTable.id"
    >
      <!-- head -->
      <thead>
        <tr>
          <th>d100</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in oracleTable">
          <th>{{ row.entry }}</th>
          <td>{{ row.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { DataTable, OracleTable } from "~~/types";
const { dataTable } = defineProps({
  dataTable: { type: Object as PropType<DataTable>, required: true },
});

const oracleTable: OracleTable[] = dataTable.table;
</script>

<style scoped></style>
