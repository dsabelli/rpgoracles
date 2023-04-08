<template>
  <ul
    v-if="mainTags"
    class="menu menu-horizontal bg-base-100 rounded-box p-2 w-full hidden lg:flex justify-center"
  >
    <template v-for="mainTag in mainTags">
      <li tabindex="0">
        <NuxtLink :to="`/tables/${mainTag.tag_path}`">
          {{ mainTag.tag_name }}</NuxtLink
        >
        <ul class="menu bg-base-100 z-20" v-if="subTags">
          <template v-for="subTag in subTags">
            <li
              tabindex="0"
              :class="subTag.tag_id === mainTag.id ? '' : 'hidden'"
            >
              <NuxtLink
                v-if="subTag.tag_id === mainTag.id"
                :to="`/tables/${mainTag.tag_path}/${subTag.tag_path}`"
                >{{ subTag.tag_name }}</NuxtLink
              >
              <ul class="bg-base-100 z-20 pl-0" v-if="documents">
                <template v-for="document in documents">
                  <li
                    tabindex="0"
                    :class="document.subtag_id === subTag.id ? '' : 'hidden'"
                  >
                    <NuxtLink
                      v-if="
                        document.subtag_id === subTag.id &&
                        subTag.tag_id === mainTag.id
                      "
                      :to="`/tables/${mainTag.tag_path}/${subTag.tag_path}/${document.doc_path}`"
                      >{{ document.doc_name }}</NuxtLink
                    >
                  </li>
                </template>
              </ul>
            </li>
          </template>
        </ul>
        <ul class="menu bg-base-100" v-if="documents">
          <template v-for="document in documents">
            <li
              tabindex="0"
              :class="document.tag_id === mainTag.id ? '' : 'hidden'"
            >
              <NuxtLink
                v-if="document.tag_id === mainTag.id"
                :to="`/tables/${mainTag.tag_path}/${document.doc_path}`"
                >{{ document.doc_name }}</NuxtLink
              >
            </li>
          </template>
        </ul>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTagStore } from "~~/stores/TagStore";
const tagsStore = useTagStore();
const docsStore = useDocumentStore();

const { mainTags, subTags } = storeToRefs(tagsStore);
const { documents } = storeToRefs(docsStore);

if (!documents.value || !mainTags.value || !subTags.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Server Error, please try again later",
    fatal: true,
  });
}
</script>

<style scoped></style>
