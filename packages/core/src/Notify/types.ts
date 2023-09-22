export interface NotifyPropsValue {
  title: string;
  description: string;
  position: "top-right" | "top-left" | "bottom-left" | "bottom-right";
  type: "success" | "warning" | "danger" | "info" | "primary";
  autoClose: boolean;
}
