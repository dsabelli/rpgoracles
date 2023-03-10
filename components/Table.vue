<template>
  <div class="overflow-x-auto">
    {{ props.dataTable.name }}
    <table
      class="table table-compact table-zebra w-full z-0"
      v-if="props.dataTable"
      :key="props.dataTable.id"
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
// interface Props {
//   dataTable: DataTable;
// }
// const props = defineProps<Props>();
const props = defineProps({
  dataTable: { type: Object as PropType<DataTable>, required: true },
});
console.log(props.dataTable.table);

const oracleTable: OracleTable = props.dataTable.table;
</script>

<style scoped></style>
