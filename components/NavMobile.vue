<template>
  <ul v-if="mainTags" class="bg-base-100 rounded-box p-2 w-52 md:hidden">
    <template v-for="mainTag in mainTags">
      <li class="p-2" tabindex="0">
        <div class="w-full flex justify-between">
          <NuxtLink class="w-full" :to="`/tables/${mainTag.tag_path}`">
            {{ mainTag.tag_name }}</NuxtLink
          >
          <button class="w-1/2 flex justify-end">
            <img src="~/assets/static/chevron-right.svg" />
          </button>
        </div>
        <ul class="bg-base-100" v-if="subTags">
          <template v-for="subTag in subTags">
            <li
              tabindex="0"
              :class="subTag.tag_id === mainTag.id ? '' : 'hidden'"
            >
              <div class="w-full flex justify-between">
                <NuxtLink
                  v-if="subTag.tag_id === mainTag.id"
                  :to="`/tables/${mainTag.tag_path}/${subTag.tag_path}`"
                  >{{ subTag.tag_name }}</NuxtLink
                ><button class="">
                  <img src="~/assets/static/chevron-right.svg" />
                </button>
              </div>
              <ul class="bg-base-100" v-if="documents">
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
        <ul class="bg-base-100 hidden" v-if="documents">
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
