import { Button } from "@nextui-org/react";
import {
  boolean,
  define,
  event,
  oneOf,
  string,
} from "@react-form-builder/core";

export const matButton = define(Button, "MatButton")
  .name("Button")
  .props({
    children: string.named("Caption").default("Button"),
    color: oneOf(
      "inherit",
      "primary",
      "secondary",
      "success",
      "error",
      "info",
      "warning"
    ),
    disabled: boolean,
    onClick: event,
  });
