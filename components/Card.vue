<template>
  <li class="list-none card w-64 bg-base-200 shadow-xl mb-4">
    <figure class="">
      <img
        :src="metaTable.meta_image"
        alt="Shoes"
        class="rounded-t-xl w-full"
      />
    </figure>
    <div class="card-body items-center text-center pt-4">
      <h2 class="card-title">{{ metaTable.meta_name }}</h2>
      <p>{{ metaTable.meta_desc }}</p>
      <div class="card-actions">
        <NuxtLink :to="path"
          ><button class="mt-2 btn btn-sm btn-primary">
            Read More
          </button></NuxtLink
        >
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { doc_types, main_tags, meta_tables, sub_tags } from ".prisma/client";
import { PropType } from "vue";

const { metaTable, subTag, mainTag, document } = defineProps({
  metaTable: { type: Object as PropType<meta_tables>, required: true },
  subTag: { type: Object as PropType<sub_tags | null>, required: true },
  mainTag: { type: Object as PropType<main_tags>, required: true },
  document: { type: Object as PropType<doc_types>, required: true },
});

const path = ref("");

path.value = subTag
  ? `/tables/${mainTag.tag_path}/${subTag.tag_path}/${document.doc_path}-${metaTable.id}`
  : `/tables/${mainTag.tag_path}/${document.doc_path}-${metaTable.id}`;
</script>
<style scoped></style>
