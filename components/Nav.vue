<template>
  <div class="navbar bg-base-100 px-0 max-w-screen-lg justify-between">
    <div class="flex-none">
      <NuxtLink to="/">RPG Oracles</NuxtLink>
    </div>
    <div class="w-full flex justify-center z-10">
      <ul
        v-if="mainTags"
        class="menu menu-horizontal bg-base-100 rounded-box p-2"
      >
        <li tabindex="0" v-for="mainTag in mainTags">
          <span
            ><NuxtLink :to="`/tables/${mainTag.tag_path}`">
              {{ mainTag.tag_name }}</NuxtLink
            ></span
          >
          <ul class="menu bg-base-100" v-if="subTags">
            <li tabindex="0" v-for="subTag in subTags">
              <span :class="subTag.tag_id === mainTag.id ? '' : 'hidden'"
                ><NuxtLink
                  :to="`/tables/${mainTag.tag_path}/${subTag.tag_path}`"
                  >{{ subTag.tag_name }}</NuxtLink
                ></span
              >
              <ul class="bg-base-100 z-20" v-if="documents">
                <li tabindex="0" v-for="document in documents">
                  <span
                    :class="document.subtag_id === subTag.id ? '' : 'hidden'"
                    ><NuxtLink
                      :to="`/tables/${mainTag.tag_path}/${subTag.tag_path}/${document.doc_path}`"
                      >{{ document.doc_name }}</NuxtLink
                    ></span
                  >
                </li>
              </ul>
            </li>
          </ul>
          <ul class="menu bg-base-100" v-if="documents">
            <li tabindex="0" v-for="document in documents">
              <span :class="document.tag_id === mainTag.id ? '' : 'hidden'"
                ><NuxtLink
                  :to="`/tables/${mainTag.tag_path}/${document.doc_path}`"
                  >{{ document.doc_name }}</NuxtLink
                ></span
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTagStore } from "~~/stores/TagStore";
const tagsStore = useTagStore();
const docsStore = useDocumentStore();

tagsStore.getMainTags();
tagsStore.getSubTags();
docsStore.getdocuments();
const { tagsLoading, mainTags, subTags } = storeToRefs(tagsStore);
const { docsLoading, documents } = storeToRefs(docsStore);

if (!documents.value || !mainTags.value || !subTags.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Server Error, please try again later",
    fatal: true,
  });
}
</script>

<style scoped></style>
