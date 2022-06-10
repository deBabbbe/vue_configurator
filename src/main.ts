import { createApp } from "vue";

import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEyeSlash,
  faFloppyDisk,
  faFolderOpen,
  faRotateRight,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSquarePlus);
library.add(faRotateRight);
library.add(faFloppyDisk);
library.add(faFolderOpen);
library.add(faEyeSlash);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
