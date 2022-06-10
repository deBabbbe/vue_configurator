<template>
  <div class="search-bar">
    <input v-model="searchValue" v-on:keyup="setFilter" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["searchValueChanged", "addNewEntry"]);
const searchValue = ref("");
const setFilter = (e: KeyboardEvent): void => {
  if (e.code == "Enter" || e.code == "NumpadEnter") {
    emit("addNewEntry", searchValue.value);
    searchValue.value = "";
  }
  emit("searchValueChanged", searchValue.value);
};
</script>
<style>
.search-bar {
  margin: 10px;
  width: auto;
}
.search-bar input {
  width: calc(100% - 10px);
}
</style>
