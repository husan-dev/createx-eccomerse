import { Button, Divider, Form, Input, Radio } from "antd";
import { Paragraph, Text, Title } from "@components/typography";
import { useForm } from "antd/es/form/Form";
import OrSignInWidth from "./or-sign-in-width";

import { Link, useParams } from "react-router-dom";

function SignUp() {
  const [form] = useForm();
  const { lang } = useParams();
  return (
    <>
      <div className="max-w-[500px] mx-auto py-[50px]">
        <div className="px-5 pb-5 ">
          <Title className="text-center !font-semibold" level={2}>
            Sign up
          </Title>
          <Paragraph className="text-center ">
            Registration takes less than a minute but gives you full control
            over your orders.
          </Paragraph>
          <Form form={form} layout="vertical">
            <Form.Item name={"fullName"} label="Full Name">
              <Input
                size="large"
                className="rounded-sm"
                placeholder="Your full Name"
              ></Input>
            </Form.Item>
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
            <Form.Item name={"confirmPassword"} label="Confirm Pasword">
              <Input.Password
                className="rounded-sm"
                size="large"
              ></Input.Password>
            </Form.Item>

            <Radio className="mb-4">Remember me</Radio>

            <Button
              size="large"
              type="primary"
              className="w-full mb-5 rounded-sm"
            >
              Sign In
            </Button>
          </Form>
          <Text className="!mb-5">
            Already have an account?
            <Link to={`/${lang}/sign-in`}> Sign in</Link>
          </Text>
        </div>
        <Divider className="!m-0" />
        <OrSignInWidth />
      </div>
    </>
  );
}

export default SignUp;
