<template>
  <div>
    <input
      type="text"
      v-on:keyup.enter="addEntry"
      v-model="newEntry"
      placeholder="Insert..."
      style="margin: 0 0 10px 10px"
    />
    <button @click="addEntry">Add</button>
  </div>
  <div v-for="entry in currentConfigEntries" style="margin: 0 0 10px 10px">
    <input v-model="entry.key" style="margin-right: 5px" />
    <input v-model="entry.value" />
  </div>
</template>

<script lang="ts" setup>
import type { IConfigurationEntry } from "@/data/configurationEntries";
import { computed, ref } from "vue";

const props = defineProps<{
  configEntries: IConfigurationEntry[];
}>();

const newEntry = ref("");
const currentConfigEntries = computed(() => props.configEntries);
const emit = defineEmits(["addNewEntry"]);

const addEntry = () => {
  const valueToAdd = newEntry.value.trim();
  const isNewEntryEmpty = valueToAdd === "";
  const keyIsNewEntry = (entry: IConfigurationEntry): boolean =>
    entry.key === valueToAdd;
  const isEntryAlreadyInList = currentConfigEntries.value.find(keyIsNewEntry);
  if (isNewEntryEmpty || isEntryAlreadyInList) return;

  emit("addNewEntry", valueToAdd);

  newEntry.value = "";
};
</script>
