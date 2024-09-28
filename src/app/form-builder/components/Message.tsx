import { boolean, define, node, oneOf } from "@react-form-builder/core";
import { Message } from "rsuite";

export const rsMessage = define(Message)
  .type("RsMessage")
  .name("Message")
  .props({
    children: node,
    closeable: boolean,
    header: node,
    type: oneOf("info", "success", "warning", "error").default("info"),
  });
