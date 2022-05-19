<template>
  <input
    v-model="searchValue"
    v-on:keyup="setFilter"
    style="margin: 10px 0 10px 10px"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["searchValueChanged", "addNewEntry"]);
const searchValue = ref("");
const setFilter = (e: KeyboardEvent): void => {
  if (e.code == "Enter") {
    emit("addNewEntry", searchValue.value);
    searchValue.value = "";
  }
  emit("searchValueChanged", searchValue.value);
};
</script>
