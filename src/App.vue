<template>
  <SearchBar @searchValueChanged="filterEntries" />
  <ConfigEntryList
    :configEntries="currentConfigEntries"
    @addNewEntry="addNewEntry"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import ConfigEntryList from "./components/ConfigEntryList.vue";
import SearchBar from "./components/SearchBar.vue";
import { configEntries } from "./data/configurationEntries";

let currentConfigEntries = ref(configEntries);

const filterEntries = (searchValue: string) => {
  currentConfigEntries.value = configEntries.filter((entry) => {
    return entry.key.toLowerCase().includes(searchValue.toLowerCase());
  });
  console.warn(currentConfigEntries.value.length);
};

const addNewEntry = (newEntry: IConfigurationEntry): void => {
  currentConfigEntries.value.push(newEntry);
};
</script>
