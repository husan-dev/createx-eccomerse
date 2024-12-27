import { Button, Divider, Form, Input, message, Radio } from "antd";
import { Paragraph, Text, Title } from "@components/typography";
import { useForm } from "antd/es/form/Form";
// import OrSignInWidth from "./or-sign-in-width";

import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "@api/auth";
import userStore from "@store/slices/user";
import { observer } from "mobx-react-lite";
import { ISignUp } from "@typess/auth";

const SignUp = observer(() => {
  const [form] = useForm();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("", { keyPrefix: "auth.signUp" });
  const { mutate, isLoading } = useMutation({
    mutationFn: (data: ISignUp) => signUp(data),
    onSuccess: (data) => {
      userStore.updateUser(data.user);
      localStorage.setItem("token", data.jwt);
      message.success("Tabriklaymiz siz muvaffaqiyatli ro'yxatdan o'tdingiz");
      navigate(`/${i18n.language}/my-profile`);
    },
    onError: () => {
      message.error({
        content: t("signUpError") || "Ro'yxatdan o'tishda xatolik yuz berdi",
        duration: 3,
      });
    },
  });
  const handleFinish = () => {
    const { fullName, email, password } = form.getFieldsValue();
    const firstName = fullName.split(" ")[0];
    const lastName = fullName.split(" ")[1];
    const formattedUsername = fullName
      .split(" ")
      .map((word: string, index: number) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");
    mutate({
      username: formattedUsername,
      email,
      password,
      firstName,
      lastName,
    });
  };
  return (
    <>
      <div className="max-w-[500px] mx-auto py-[50px]">
        <div className="px-5 pb-5 ">
          <Title className="text-center !font-semibold" level={2}>
            {t("title")}
          </Title>
          <Paragraph className="text-center ">{t("description")}</Paragraph>
          <Form form={form} onFinish={handleFinish} layout="vertical">
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

            <Form.Item
              name={"password"}
              label={t("form.password.label")}
              rules={[{ required: true, message: t("form.password.required") }]}
            >
              <Input.Password
                className="rounded-sm"
                size="large"
                placeholder={t("form.password.placeholder")}
              />
            </Form.Item>
            <Form.Item
              name={"confirmPassword"}
              label={t("form.confirmPassword.label")}
              dependencies={["password"]}
              rules={[
                { required: true, message: t("form.confirmPassword.required") },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(t("form.confirmPassword.mismatch"));
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder={t("form.confirmPassword.placeholder")}
                className="rounded-sm"
                size="large"
              />
            </Form.Item>

            {/* <Radio className="mb-4">{t("form.rememberMe")}</Radio> */}

            <Button
              size="large"
              type="primary"
              className="w-full mb-5 rounded-sm"
              disabled={isLoading}
              loading={isLoading}
              onClick={() => form.submit()}
            >
              {t("form.signInButton")}
            </Button>
          </Form>
          <Text className="!mb-5">
            {t("form.alreadyHaveAccount")}
            <Link to={`/${i18n.language}/sign-in`}>{t("form.signInLink")}</Link>
          </Text>
        </div>
        <Divider className="!m-0" />
        {/* <OrSignInWidth /> */}
      </div>
    </>
  );
});

export default SignUp;
