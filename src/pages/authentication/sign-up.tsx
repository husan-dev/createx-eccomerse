import { Button, Divider, Form, Input, Radio } from "antd";
import { Paragraph, Text, Title } from "@components/typography";
import { useForm } from "antd/es/form/Form";
import OrSignInWidth from "./or-sign-in-width";

import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SignUp() {
  const [form] = useForm();
  const { lang } = useParams();
  const { t } = useTranslation("", { keyPrefix: "auth.signUp" });
  return (
    <>
      <div className="max-w-[500px] mx-auto py-[50px]">
        <div className="px-5 pb-5 ">
          <Title className="text-center !font-semibold" level={2}>
            {t("title")}
          </Title>
          <Paragraph className="text-center ">{t("description")}</Paragraph>
          <Form form={form} layout="vertical">
            <Form.Item name={"fullName"} label={t("form.fullName.label")}>
              <Input
                size="large"
                className="rounded-sm"
                placeholder={t("form.fullName.placeholder")}
              />
            </Form.Item>

            <Form.Item name={"email"} label={t("form.email.label")}>
              <Input
                className="rounded-sm"
                size="large"
                placeholder={t("form.email.placeholder")}
                type="email"
              />
            </Form.Item>

            <Form.Item name={"password"} label={t("form.password.label")}>
              <Input.Password
                className="rounded-sm"
                size="large"
                placeholder={t("form.password.placeholder")}
              />
            </Form.Item>
            <Form.Item
              name={"confirmPassword"}
              label={t("form.confirmPassword.label")}
            >
              <Input.Password
                placeholder={t("form.confirmPassword.placeholder")}
                className="rounded-sm"
                size="large"
              />
            </Form.Item>

            <Radio className="mb-4">{t("form.rememberMe")}</Radio>

            <Button
              size="large"
              type="primary"
              className="w-full mb-5 rounded-sm"
            >
              {t("form.signInButton")}
            </Button>
          </Form>
          <Text className="!mb-5">
            {t("form.alreadyHaveAccount")}
            <Link to={`/${lang}/sign-in`}>{t("form.signInLink")}</Link>
          </Text>
        </div>
        <Divider className="!m-0" />
        <OrSignInWidth />
      </div>
    </>
  );
}

export default SignUp;
