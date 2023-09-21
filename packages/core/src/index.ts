import { type App } from "vue";

export function Notify(app: App) {
  app.directive("notify", {});
}

export default function () {
  console.log("hello world!!!");
}
