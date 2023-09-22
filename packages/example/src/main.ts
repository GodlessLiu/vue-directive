import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { Notify } from "@vue-directive/core";
import "@vue-directive/core/dist/style.css";

const app = createApp(App);
Notify(app);
app.mount("#app");
