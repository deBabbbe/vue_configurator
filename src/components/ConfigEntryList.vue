<template>
  <div
    v-for="entry in currentConfigEntries"
    v-bind:key="entry.key"
    style="margin: 0 0 10px 10px"
  >
    <input v-model="entry.key" style="margin-right: 5px" />
    <input v-model="entry.value" />
    <button @click="removeEntry(entry)">Remove</button>
  </div>
</template>

<script lang="ts" setup>
import type { IConfigurationEntry } from "@/data/configurationEntries";
import { computed } from "vue";

const props = defineProps<{
  configEntries: IConfigurationEntry[];
}>();

const currentConfigEntries = computed(() => props.configEntries);
const removeEntry = (entry: IConfigurationEntry) => {
  props.configEntries.splice(props.configEntries.indexOf(entry), 1);
};
</script>
