<template>
  <div class="overflow-x-auto">
    <table class="table table-compact table-zebra w-full z-0">
      <!-- head -->
      <thead>
        <tr>
          <th>d100</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in props.dataTable">
          <th>{{ row.id }}</th>
          <td>{{ row.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { DataTable } from "~~/types";
const props = defineProps({
  dataTable: { type: Object as PropType<DataTable[]> },
});
</script>

<style scoped></style>
