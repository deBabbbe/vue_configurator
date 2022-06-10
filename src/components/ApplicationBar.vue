<template>
  <div className="ApplicationBar">
    <img src="../icons/Logo.svg" alt="Logo" />
    <span>
      <font-awesome-icon icon="fa-user" class="application-bar-button" />
    </span>
    <p id="userName">{{ props.userName }}</p>
    <span>
      <font-awesome-icon
        icon="fa-circle-question"
        class="application-bar-button"
        title="Hilfe"
      />
    </span>
    <span>
      <font-awesome-icon
        icon="fa-triangle-exclamation"
        class="application-bar-button"
        title="Warnungen"
      />
    </span>
    <span>
      <font-awesome-icon
        icon="fa-circle-info"
        class="application-bar-button"
        title="Informationen"
      />
    </span>
    <span>
      <font-awesome-icon
        icon="fa-power-off"
        class="application-bar-button"
        title="Ausloggen"
      />
    </span>
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

.application-bar-button {
  margin-right: 15px;
  float: right;
}
</style>
