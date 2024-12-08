import { Button, Divider, Form, Input, Radio } from "antd";
import { Paragraph, Text, Title } from "@components/typography";
import { useForm } from "antd/es/form/Form";
import OrSignInWidth from "./or-sign-in-width";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SignIn() {
  const [form] = useForm();
  const { lang } = useParams();
  const { t } = useTranslation("", { keyPrefix: "auth.signIn" });
  function handleFinish() {
    console.log(form.getFieldValue, "sing-in handle-finish()");
  }
  return (
    <>
      <div className="mx-auto max-w-[500px] py-[50px]">
        <div className="px-5 pb-5">
          <Title className="text-center !font-semibold" level={2}>
            {t("title")}
          </Title>
          <Paragraph className="text-center ">{t("description")}</Paragraph>
          <Form onFinish={handleFinish} form={form} layout="vertical">
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
                placeholder={t("form.password.placeholder")}
                className="rounded-sm"
                size="large"
              />
            </Form.Item>
            <div className="flex justify-between mb-5">
              <Radio>{t("form.keepSignedIn")}</Radio>
              <Link to="/">{t("form.forgotPassword")}</Link>
            </div>
            <Button
              onClick={form.submit}
              size="large"
              type="primary"
              className="w-full mb-5 rounded-sm"
            >
              {t("form.signInButton")}
            </Button>
          </Form>
          <Text className="!mb-5">
            {t("form.dontHaveAccount")}{" "}
            <Link to={`/${lang}/sign-up`}> {t("form.signUpLink")}</Link>
          </Text>
        </div>
        <Divider className="!m-0" />
        <OrSignInWidth />
      </div>
    </>
  );
}

export default SignIn;
