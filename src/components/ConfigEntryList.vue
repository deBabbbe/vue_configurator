<template>
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

const currentConfigEntries = computed(() => props.configEntries);
</script>
