<template>
  <div className="ActionBar">
    Configurator
    <span>
      <font-awesome-icon
        icon="fa-rotate-right"
        class="action-bar-button"
        title="Add entry"
      />
    </span>
    <span>
      <font-awesome-icon
        icon="fa-floppy-disk"
        class="action-bar-button"
        title="Add entry"
      />
    </span>
    <span>
      <font-awesome-icon
        icon="fa-folder-open"
        class="action-bar-button"
        title="Add entry"
      />
    </span>
    <span>
      <font-awesome-icon
        icon="fa-square-plus"
        class="action-bar-button"
        title="Add entry"
      />
    </span>
    <span>
      <font-awesome-icon
        icon="fa-eye-slash"
        class="action-bar-button"
        title="Add entry"
      />
    </span>
  </div>
</template>
<style>
.ActionBar {
  font-size: 20px;
  background-color: #293b51;
  color: white;
  padding: 10px;
  user-select: none;
}
.action-bar-button {
  margin-right: 15px;
  float: right;
}
</style>
