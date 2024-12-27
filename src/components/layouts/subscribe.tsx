import { Button, Input, Radio, Space, InputRef, message } from "antd";
import { Paragraph, Title } from "../typography";
import image from "@images/subscribe.svg";
import Container from "@components/container";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

const buttons = ["women", "men", "girls", "boys"];

function Subscribe() {
  const { t } = useTranslation("", { keyPrefix: "landingPage.subscribe" });
  const email = useRef<InputRef>(null);

  return (
    <div className="py-10 bg-gray-200">
      <Container className="grid items-center grid-cols-1 gap-10 md:gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2 ">
          <Title className=" !mb-0 !font-bold !text-3xl sm:!text-4xl md:!text-3xl lg:!text-4xl">
            {t("title")}
          </Title>
          <Paragraph>{t("desc")}</Paragraph>
          <Space className="mb-4">
            {buttons.map((item, index) => (
              <Button size="middle" key={index}>
                {t("categories." + item)}
              </Button>
            ))}
          </Space>
          <div>
            <Paragraph>Email</Paragraph>
            <Space.Compact className="!rounded-none h-[45px]">
              <Input
                ref={email}
                className="w-full !rounded-sm"
                size="large"
                type="email"
                placeholder={t("inputPlaceholder")}
              />
              <Button
                onClick={() => {
                  if (email.current?.input) {
                    email.current.input.value = "";
                  }
                  message.success("Thank you for subscribing");
                }}
                className="!rounded-sm h-[45px]"
                type="primary"
              >
                {t("subscribe")}
              </Button>
            </Space.Compact>
          </div>
          <Radio>{t("agree")}</Radio>
        </div>
        <img
          className="mx-auto w-[80%] md:w-full lg:w-[60%]"
          src={image}
          alt=""
        />
      </Container>
    </div>
  );
}

export default Subscribe;
