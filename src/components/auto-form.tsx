import { IAutoForm, IFormData } from "../types/auto-form";
import {
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Rate,
  Select,
  Slider,
  Switch,
} from "antd";
const { TextArea } = Input;
import { useCallback } from "react";
const { RangePicker } = DatePicker;

function AutoForm({
  onFinish,
  form,
  data,
  size,
  gap,
  layout,
  inputClassName,
}: IAutoForm) {
  const Field = useCallback(
    ({ item }: { item: IFormData }) => {
      function element(item: IFormData) {
        switch (item.type) {
          case "email":
            return (
              <Input
                className={` ${inputClassName}`}
                placeholder={item.placeholder}
                type="email"
              />
            );
          case "password":
            return (
              <Input.Password
                className={` ${inputClassName}`}
                placeholder={item.placeholder}
              />
            );
          case "number":
            return (
              <InputNumber
                placeholder={item.placeholder}
                className={`w-full ${inputClassName}`}
              />
            );
          case "datePicker":
            return (
              <DatePicker className="w-full" placeholder={item.placeholder} />
            );
          case "switch":
            return <Switch />;
          case "colorPicker":
            return <ColorPicker />;
          case "rangePicker":
            return <RangePicker className={`w-full ${inputClassName}`} />;
          case "rate":
            return <Rate />;
          case "slider":
            return <Slider />;
          case "select":
            return (
              <Select
                className={` custom-select ${inputClassName}`}
                placeholder={item.placeholder}
                options={item.selectOptions}
              />
            );
          case "textarea":
            return (
              <TextArea
                className={` ${inputClassName}`}
                placeholder={item.placeholder}
              />
            );
          default:
            return (
              <Input
                className={` ${inputClassName}`}
                placeholder={item.placeholder}
              />
            );
        }
      }
      return (
        <Form.Item
          style={{ gridColumn: `span ${item.span} / span ${item.span} ` }}
          rules={[
            {
              message: item.rules?.message,
              required: item.rules?.requared,
            },
          ]}
          name={item.name}
          label={item.label}
        >
          {element(item)}
        </Form.Item>
      );
    },
    [inputClassName]
  );
  return (
    <Form
      onFinish={onFinish}
      form={form}
      size={size}
      layout={layout}
      className={`grid gird-cols-1 md:grid-cols-2`}
      style={{ gap: ` 0 ${gap}px` }}
    >
      {data?.map((item, index) => (
        <Field key={index} item={item} />
      ))}
    </Form>
  );
}

export default AutoForm;
