import { Title } from "@components/typography";
import { Form, Input, Radio, Space } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import visaL from "@images/payment-types/visa.svg";
import masterCardL from "@images/payment-types/master-card.svg";
import PayPalL from "@images/payment-types/pay-pal.svg";

const inputClassName = "!rounded-sm";
const logoClassName = "w-[50px]";

function PaymentMethod() {
  const { t } = useTranslation("", { keyPrefix: "checkout.4" });
  const [value, setValue] = useState("credit-card");

  return (
    <div className="mb-[40px]">
      <Title className="!text-[20px]">4. {t("title")}</Title>
      <Radio.Group
        value={value}
        className="flex flex-col gap-3 w-[100%] lg:max-w-[400px]"
      >
        {radioItems.map((item) => (
          <div
            key={item.value}
            onClick={() => setValue(item.value)}
            className="p-5 transition-all border-2 rounded cursor-pointer"
          >
            <Radio value={item.value}>{item.label}</Radio>
            <div
              className={classNames(
                " transition-all duration-500  overflow-hidden",
                value === item.value
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              {item.content}
            </div>
          </div>
        ))}
      </Radio.Group>
    </div>
  );
}

const radioItems = [
  {
    value: "credit-card",
    label: (
      <Space>
        <Title className="!text-sm"> Credit Card</Title>
        <Space size={"small"}>
          <img className={logoClassName} src={masterCardL} />
          <img className={logoClassName} src={visaL} />
        </Space>
      </Space>
    ),
    content: (
      <Form layout="vertical" className="grid grid-cols-2 mt-3 gap-x-5">
        <Form.Item label="Card number" className="col-span-2">
          <Input
            className={inputClassName}
            placeholder="0000 0000 0000 0000"
            size="large"
          />
        </Form.Item>
        <Form.Item label="Expiry Date" className="!mb-0">
          <Input className={inputClassName} placeholder="mm/yy" size="large" />
        </Form.Item>
        <Form.Item label="CVC" className="!mb-0">
          <Input className={inputClassName} placeholder="000" size="large" />
        </Form.Item>
      </Form>
    ),
  },
  {
    value: "pay-pal",
    label: (
      <Space>
        <Title className="!text-sm">PayPal</Title>
        <img className={logoClassName} src={PayPalL} alt="payPal" />
      </Space>
    ),
    content: (
      <>
        {" "}
        <Form layout="vertical" className="grid grid-cols-2 mt-3 gap-x-5">
          <Form.Item label="Card number" className="col-span-2">
            <Input
              className={inputClassName}
              placeholder="0000 0000 0000 0000"
              size="large"
            />
          </Form.Item>
          <Form.Item label="Expiry Date" className="!mb-0">
            <Input
              className={inputClassName}
              placeholder="mm/yy"
              size="large"
            />
          </Form.Item>
          <Form.Item label="CVC" className="!mb-0">
            <Input className={inputClassName} placeholder="000" size="large" />
          </Form.Item>
        </Form>
      </>
    ),
  },
  {
    value: "cash-delivary",
    label: (
      <Space>
        <Title className="!text-sm">Cash on delivary</Title>
      </Space>
    ),
    content: (
      <>
        {" "}
        <Form layout="vertical" className="grid grid-cols-2 mt-3 gap-x-5">
          <Form.Item label="Card number" className="col-span-2">
            <Input
              className={inputClassName}
              placeholder="0000 0000 0000 0000"
              size="large"
            />
          </Form.Item>
          <Form.Item label="Expiry Date" className="!mb-0">
            <Input
              className={inputClassName}
              placeholder="mm/yy"
              size="large"
            />
          </Form.Item>
          <Form.Item label="CVC" className="!mb-0">
            <Input className={inputClassName} placeholder="000" size="large" />
          </Form.Item>
        </Form>
      </>
    ),
  },
];

export default PaymentMethod;
