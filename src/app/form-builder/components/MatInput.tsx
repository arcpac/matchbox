import { Input, InputProps } from "@mui/material";
import { define, string } from "@react-form-builder/core";

type MatInputProps = InputProps & {
  onChange?: (value: any) => void;
};

const MatInput = (props: MatInputProps) => {
  const { onChange, ...otherProps } = props;
  return (
    <Input
      {...otherProps}
      onChange={(event) => {
        onChange?.(event.target.value);
      }}
    />
  );
};

export const matInput = define(MatInput, "MatInput")
  .name("Input")
  .props({
    value: string.valued.default(""),
  });
