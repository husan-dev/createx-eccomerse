import { FormInstance, SelectProps } from "antd";

export type IType =
  | "password"
  | "email"
  | "number"
  | "textarea"
  | "select"
  | "datePicker"
  | "rangePicker"
  | "switch"
  | "slider"
  | "colorPicker"
  | "rate"
  | "slider";

export type InputSize = "middle" | "small" | "large";

export interface IFormData {
  type?: IType;
  name: string;
  label: string;
  placeholder?: string;
  span?: number;
  rules?: { requared?: boolean; message?: string };
  selectOptions?: SelectProps["options"];
}

export interface IAutoForm {
  onFinish: (values: Record<string, unknown>) => void;
  form: FormInstance;
  data: IFormData[];
  layout?: "vertical" | "horizontal" | "inline";
  size?: InputSize;
  col?: number;
  gap?: number;
  gapX?: number;
  gapY?: number;
  allRequared?: boolean;
  inputClassName?: string;
}
