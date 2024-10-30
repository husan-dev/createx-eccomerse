import { Button, Divider, Form, Input, Radio } from "antd";
import { Paragraph, Text, Title } from "../../components/typography";
import { useForm } from "antd/es/form/Form";
import OrSignInWidth from "./or-sign-in-width";
import { Link, useParams } from "react-router-dom";

function SignIn() {
  const [form] = useForm();
  const { lang } = useParams();
  return (
    <>
      <div className="mx-auto max-w-[500px] py-[50px]">
        <div className="px-5 pb-5">
          <Title className="text-center !font-semibold" level={2}>
            Sign in
          </Title>
          <Paragraph className="text-center ">
            Sign in to your account using email and password provided during
            registration.
          </Paragraph>
          <Form form={form} layout="vertical">
            <Form.Item name={"email"} label="Email">
              <Input
                className="rounded-sm"
                size="large"
                placeholder="Your working email"
                type="email"
              ></Input>
            </Form.Item>
            <Form.Item name={"password"} label="Pasword">
              <Input.Password
                className="rounded-sm"
                size="large"
              ></Input.Password>
            </Form.Item>
            <div className="flex justify-between mb-5">
              <Radio>Keep me signed in</Radio>
              <Link to="/">Forgot Password?</Link>
            </div>
            <Button
              size="large"
              type="primary"
              className="w-full mb-5 rounded-sm"
            >
              Sign In
            </Button>
          </Form>
          <Text className="!mb-5">
            Dont hav account? <Link to={`/${lang}/sign-up`}> Sign up</Link>
          </Text>
        </div>
        <Divider className="!m-0" />
        <OrSignInWidth />
      </div>
    </>
  );
}

export default SignIn;
