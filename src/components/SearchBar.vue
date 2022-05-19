<template>
  <input v-model="searchValue" @change="setFilter" />
</template>
<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["searchValueChanged"]);
const searchValue = ref("");
const setFilter = (_: Event): void => {
  emit("searchValueChanged", searchValue.value);
};
</script>
