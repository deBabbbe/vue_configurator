<template>
  <ApplicationBar />
  <ActionBar />
  <SearchBar @searchValueChanged="filterEntries" @addNewEntry="addNewEntry" />
  <ConfigEntryList
    :configEntries="currentConfigEntries"
    @addNewEntry="addNewEntry"
  />
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";
import ActionBar from "./components/ActionBar.vue";
import ApplicationBar from "./components/ApplicationBar.vue";
import ConfigEntryList from "./components/ConfigEntryList.vue";
import SearchBar from "./components/SearchBar.vue";
import { configEntries } from "./data/configurationEntries";

let currentConfigEntries = ref(configEntries);

const filterEntries = (searchValue: string) => {
  currentConfigEntries.value = configEntries.filter((entry) => {
    return entry.key?.toLowerCase().includes(searchValue.toLowerCase());
  });
};

const addNewEntry = (newEntry: string): void => {
  configEntries.push({
    id: uuidv4(),
    key: newEntry,
    value: "",
  });
};
</script>
