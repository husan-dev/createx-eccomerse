import { Title } from "@components/typography";
import { Form, Input } from "antd";
import { useTranslation } from "react-i18next";

function AdditionalInformation() {
  const { t } = useTranslation("", { keyPrefix: "checkout.5" });

  return (
    <>
      <Title className="!text-[20px]">5. {t("title")}</Title>
      <Form.Item layout="vertical" label={t("textarea.label")}>
        <Input.TextArea
          className="!rounded-sm"
          rows={4}
          placeholder={t("textarea.placeholder")}
        />
      </Form.Item>
    </>
  );
}

export default AdditionalInformation;
