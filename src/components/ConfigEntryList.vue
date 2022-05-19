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
    <input v-model="entry.key" />
    <input v-model="entry.value" />
  </div>
</template>

<script lang="ts" setup>
import type { ConfigurationEntry as IConfigurationEntry } from "@/data/configurationEntries";
import { v4 as uuidv4 } from "uuid";
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

  emit("addNewEntry", {
    id: uuidv4(),
    key: valueToAdd,
    value: "",
  });

  newEntry.value = "";
};
</script>
