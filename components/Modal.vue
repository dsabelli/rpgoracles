<template>
  <div>
    <label
      for="roll-modal"
      class="btn btn-secondary text-white"
      @click="rollTable"
      >Roll</label
    >

    <input type="checkbox" id="roll-modal" class="modal-toggle" />
    <label for="roll-modal" class="modal cursor-pointer">
      <label class="modal-box relative" for="s">
        <h3 v-if="result" class="text-lg font-bold text-center">
          {{ tableEntries.indexOf(result) + 1 }} - {{ result.entry_value }}
        </h3>
      </label>
    </label>
  </div>
</template>

<script setup lang="ts">
import { table_entries } from ".prisma/client";

const { tableEntries, name } = defineProps({
  tableEntries: { type: Object as PropType<table_entries[]>, required: true },
  name: { type: String, required: true },
});
const result: Ref<table_entries> | Ref<undefined> = ref();

const rollTable = () => {
  const rand = Math.floor(Math.random() * tableEntries.length);
  result.value = tableEntries[rand];
};
</script>

<style scoped></style>
