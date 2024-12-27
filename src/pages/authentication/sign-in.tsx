import { Button, Divider, Form, Input, message } from "antd";
import { Paragraph, Text, Title } from "@components/typography";
import { useForm } from "antd/es/form/Form";
// import OrSignInWidth from "./or-sign-in-width";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@api/auth";
import { observer } from "mobx-react-lite";
import userStore from "@store/slices/user";
const SignIn = observer(() => {
  const [form] = useForm();
  const { lang } = useParams();
  const { t } = useTranslation("", { keyPrefix: "auth.signIn" });
  const navigate = useNavigate();
  const loginMutation = useMutation({
    mutationFn: (credentials: { identifier: string; password: string }) =>
      signIn(credentials.identifier, credentials.password),
    onSuccess: (data) => {
      userStore.updateUser(data.user);
      localStorage.setItem("token", data.jwt);
      message.success("Tizimga kirish muvaffaqiyatli amalga oshirildi");
      navigate(`/${lang}/`);
    },
    onError: () => {
      message.error({
        content: t("loginError") || "Tizimga kirishda xatolik yuz berdi",
        duration: 3,
      });
    },
  });

  function handleFinish() {
    console.log("Form submitted");
    const { email, password } = form.getFieldsValue();
    console.log("Calling signIn with:", { identifier: email, password });
    loginMutation.mutate({ identifier: email, password });
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
            {/* <div className="flex justify-between mb-5">
              <Radio>{t("form.keepSignedIn")}</Radio>
              <Link to="/">{t("form.forgotPassword")}</Link>
            </div> */}
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
            {t("form.dontHaveAccount")}
            <Link to={`/${lang}/sign-up`}> {t("form.signUpLink")}</Link>
          </Text>
        </div>
        <Divider className="!m-0" />
        {/* <OrSignInWidth /> */}
      </div>
    </>
  );
});

export default SignIn;
