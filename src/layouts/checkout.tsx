import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import { Divider, Form, Input, message } from "antd";
import { useTranslation } from "react-i18next";

function Checkout() {
  const { t } = useTranslation("", { keyPrefix: "checkout" });
  return (
    <Container className="flex gap-32">
      <div>
        <div className="flex justify-between">
          <Title>Checkout</Title>
          <Paragraph className="!mb-0">Back to shopping</Paragraph>
        </div>
        <Divider />
        <Title>1. Item Review</Title>
        <Title>2. {t("2.title")}</Title>
        <Form
          layout="vertical"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-5"
        >
          <Form.Item label={t("2.form.firstName.label")} name={"firstName"}>
            <Input
              size="large"
              placeholder={t("2.form.firstName.placeholder")}
              className="rounded-sm"
            />
          </Form.Item>
          <Form.Item label={t("2.form.lastName.label")} name="lastName">
            <Input
              size="large"
              placeholder={t("2.form.lastName.placeholder")}
              className="rounded-sm"
            />
          </Form.Item>
          <Form.Item label={t("2.form.email.label")} name="email">
            <Input
              size="large"
              placeholder={t("2.form.email.placeholder")}
              className="rounded-sm"
            />
          </Form.Item>
          <Form.Item label={t("2.form.phone.label")} name="phone">
            <Input
              size="large"
              placeholder={t("2.form.phone.placeholder")}
              className="rounded-sm"
            />
          </Form.Item>
          <Form.Item label={t("2.form.country.label")} name="country">
            <Input
              size="large"
              placeholder={t("2.form.country.placeholder")}
              className="rounded-sm"
            />
          </Form.Item>
          <Form.Item label={t("2.form.city.label")} name="city">
            <Input
              size="large"
              placeholder={t("2.form.city.placeholder")}
              className="rounded-sm"
            />
          </Form.Item>
          <Form.Item label={t("2.form.adress.label")} name="adress">
            <Input
              size="large"
              placeholder={t("2.form.adress.placeholder")}
              className="rounded-sm"
            />
          </Form.Item>
          <Form.Item label={t("2.form.zipCode.label")} name="zipCode">
            <Input
              size="large"
              placeholder={t("2.form.zipCode.placeholder")}
              className="rounded-sm"
            />
          </Form.Item>
        </Form>
      </div>
      <div></div>
    </Container>
  );
}

export default Checkout;
