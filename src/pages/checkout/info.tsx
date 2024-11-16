import { Paragraph, Title } from "@components/typography";
import { Button, Divider, Form, Input, Space } from "antd";
import { useTranslation } from "react-i18next";

const liClassName = "flex justify-between";

function Info({ className }: { className?: string }) {
  const { t } = useTranslation("", { keyPrefix: "checkout.info" });

  return (
    <div className={`flex flex-col gap-5 max-w-[400px] ${className}`}>
      <Form.Item layout="vertical" label={t("code.label")} className="!m-0">
        <Space.Compact className="!rounded-sm h-[45px]">
          <Input
            className="w-full !rounded-sm"
            size="large"
            placeholder={t("code.placeholder")}
          />
          <Button className="!rounded-sm h-[45px]" type="primary">
            {t("code.button")}
          </Button>
        </Space.Compact>
      </Form.Item>

      <div className="bg-gray-100 ">
        <div className="p-4">
          <Title className="!text-[24px] !m-0">{t("card.orderTotals")}</Title>
        </div>
        <Divider className="!m-0" />
        <div className="p-4">
          <ul>
            <li className={liClassName}>
              <Paragraph>{t("card.subtotal")}</Paragraph>
              <Paragraph></Paragraph>
            </li>
            <li className={liClassName}>
              <Paragraph>{t("card.shippingCost")}</Paragraph>
              <Paragraph></Paragraph>
            </li>
            <li className={liClassName}>
              <Paragraph>{t("card.discount")}</Paragraph>
              <Paragraph></Paragraph>
            </li>
            <li className={liClassName}>
              <Paragraph>{t("card.estimatedSalesTax")}</Paragraph>
              <Paragraph></Paragraph>
            </li>
          </ul>
        </div>
        <Divider className="!m-0" />
        <div className="flex justify-between p-4">
          <Title className="!text-[20px] !m-0">{t("card.orderTotal")}</Title>
        </div>
      </div>
      <Button type="primary" size="large" className="w-full rounded-sm">
        {t("button")}
      </Button>
    </div>
  );
}

export default Info;
