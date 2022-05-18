<template>
  <div>
    <input
      type="text"
      v-on:keyup.enter="addEntry"
      v-model="newEntry"
      placeholder="Insert..."
    />
    <button @click="addEntry">Add</button>
  </div>
  <div v-for="entry in currentConfigEntries">
    <!-- <input v-model="entry.id" /> -->
    <input v-model="entry.key" />
    <input v-model="entry.value" />
  </div>
</template>

<script lang="ts" setup>
import type { ConfigurationEntry as IConfigurationEntry } from "@/data/configurationEntries";
import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";

const props = defineProps<{
  configEntries: IConfigurationEntry[];
}>();

const newEntry = ref("");
const currentConfigEntries = ref(props.configEntries);

const addEntry = () => {
  const valueToAdd = newEntry.value.trim();
  const isNewEntryEmpty = valueToAdd === "";
  const keyIsNewEntry = (entry: IConfigurationEntry): boolean =>
    entry.key === valueToAdd;
  const isEntryAlreadyInList = currentConfigEntries.value.find(keyIsNewEntry);
  if (isNewEntryEmpty || isEntryAlreadyInList) return;

  currentConfigEntries.value.push({
    id: uuidv4(),
    key: valueToAdd,
    value: "",
  });
  newEntry.value = "";
};
</script>
