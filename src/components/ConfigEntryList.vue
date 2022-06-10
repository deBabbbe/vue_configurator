<template>
  <div
    class="config-entry-list"
    v-for="entry in currentConfigEntries"
    v-bind:key="entry.key"
    style="margin: 0 0 10px 10px"
  >
    <input v-model="entry.key" style="margin-right: 5px" />
    <input v-model="entry.value" placeholder="[PLEASE FILL VALUE]" />
    <span>
      <font-awesome-icon
        icon="fa-ban"
        class="button"
        title="Löschen"
        @click="removeEntry(entry)"
      />
    </span>
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
<style>
.config-entry-list {
  width: auto;
}

.config-entry-list .button {
  margin-left: 10px;
  color: grey;
}

.config-entry-list input {
  width: 47%;
}

.config-entry-list input:placeholder-shown {
  border: 5px solid red;
  width: calc(47% - 5px);
}
</style>
