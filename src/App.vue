<template>
  <Configurator :configEntries="configEntries" />
</template>

<script setup lang="ts">
import Configurator from "./components/ConfigEntryList.vue";
import { configEntries } from "./data/configurationEntries";
</script>
