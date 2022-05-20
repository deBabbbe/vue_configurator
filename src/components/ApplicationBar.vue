<template>
  <div className="ApplicationBar">
    <img src="../icons/Logo.svg" alt="Logo" />
    <p id="userName">{{ props.userName }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  userName: string;
}>();
</script>

<style>
.ApplicationBar {
  font-size: 20px;
  background-color: #55717f;
  color: white;
  padding: 10px;
}

#userName {
  margin: 3px 15px 0 0;
  float: right;
  color: white;
  font-size: 16px;
  min-width: 100px;
  text-align: center;
}

img {
  widows: 60px;
  height: 20px;
}
</style>
