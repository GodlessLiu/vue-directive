import { type App, createApp, h, type DirectiveBinding } from "vue";
import NotifyVue from "./components/Notify.vue";
import type { NotifyPropsValue } from "./types";

let NotifyApp: App;

export function Notify(app: App) {
  app.directive("notify", (el, binding: DirectiveBinding<NotifyPropsValue>) => {
    const appendto = document.body;
    el.addEventListener("click", () => {
      NotifyApp = createApp({
        name: "VTooltipDirectiveApp",
        setup() {
          return {};
        },
        render() {
          return h(NotifyVue, {
            title: binding.value.title,
            description: binding.value.description,
            position: binding.value.position,
            type: binding.value.type,
            autoClose: binding.value.autoClose,
          });
        },
        devtools: {
          hide: true,
        },
      });
      const mountTarget = document.createElement("div");
      appendto.appendChild(mountTarget);
      NotifyApp.mount(mountTarget);
    });
  });
}
