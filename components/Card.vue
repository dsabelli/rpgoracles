<template>
  <!-- <div
    v-if="subTags"
    class="card w-64 bg-base-100 shadow-xl"
    :class="
      isParentPath(route, subTags)
        ? ''
        : isMatchingSubpath(route, metaTable)
        ? ''
        : 'hidden'
    "
  > -->
  <div class="card w-72 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img :src="metaTable.meta_image" alt="Shoes" class="rounded-xl w-48" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">{{ metaTable.meta_name }}</h2>
      <p>{{ metaTable.meta_desc }}</p>
      <div class="card-actions">
        <NuxtLink :to="path"
          ><button class="btn btn-primary">Read More</button></NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { doc_types, main_tags, meta_tables, sub_tags } from ".prisma/client";
import { PropType } from "vue";

const { metaTable, subTag, mainTag, document } = defineProps({
  metaTable: { type: Object as PropType<meta_tables>, required: true },
  subTag: { type: Object as PropType<sub_tags>, required: false },
  mainTag: { type: Object as PropType<main_tags>, required: false },
  document: { type: Object as PropType<doc_types>, required: false },
});

if (!metaTable) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
//if user is currently on a [document].vue page, add the id onto the end of the path
//if the user is currently on a parent path and has subtags add the first subtag to the route,
//else go to the specific documents path
let path = ref("");

path.value = subTag
  ? `/tables/${mainTag?.tag_path}/${subTag?.tag_path}/${document?.doc_path}-${metaTable.id}`
  : `/tables/${mainTag?.tag_path}/${document?.doc_path}-${metaTable.id}`;
// const getPath = (): string =>
//   route.params.document
//     ? `${route.fullPath}-${metaTable.id}`
//     :
//       isParentPath(route, subtags.value) &&
//       metaTable.subtag.length
//     ? `${route.fullPath}/${metaTable.subtag}/${metaTable.document}-${metaTable.id}`
//     : `${route.fullPath}/${metaTable.document}-${metaTable.id}`;

// path.value = getPath();
</script>
<style scoped></style>
