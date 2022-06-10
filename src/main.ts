import { createApp } from "vue";

import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBan,
  faCircleInfo,
  faCircleQuestion,
  faEyeSlash,
  faFloppyDisk,
  faFolderOpen,
  faPowerOff,
  faRotateRight,
  faSquarePlus,
  faTriangleExclamation,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faUser,
  faEyeSlash,
  faFloppyDisk,
  faFolderOpen,
  faRotateRight,
  faSquarePlus,
  faCircleQuestion,
  faTriangleExclamation,
  faCircleInfo,
  faPowerOff,
  faBan
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
