import { Paragraph, Title } from "@components/typography";
import { Button, Form, Input } from "antd";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { TEL_NUMBER } from "@src/constants";
import { useTranslation } from "react-i18next";

function ContactUs() {
  const { t } = useTranslation("", { keyPrefix: "contact.contact-us" });
  return (
    <div>
      <Title className="!text-[20px] !mb-5">{t("heading")}</Title>
      <ul className="mb-5">
        {connections.map((item, index) => (
          <li key={index} className="flex items-center gap-2 !text-main mb-2">
            {item.icon}{" "}
            <Paragraph className="!m-0 text-main">{item.title}</Paragraph>
          </li>
        ))}
      </ul>

      <Title className="!text-[20px] !mb-5">{t("orText")}</Title>
      <Form
        layout="vertical"
        className="grid grid-cols-1 mt-8 sm:grid-cols-2 gap-x-7"
      >
        <Form.Item label={t("form.fullName.label")} name="name">
          <Input
            size="large"
            className="!rounded-sm"
            placeholder={t("form.fullName.placeholder")}
          />
        </Form.Item>
        <Form.Item label={t("form.email.label")} name="email">
          <Input
            type="email"
            size="large"
            className="!rounded-sm"
            placeholder={t("form.email.placeholder")}
          />
        </Form.Item>
        <Form.Item label={t("form.phone.label")} name="phone">
          <Input
            size="large"
            className="!rounded-sm"
            placeholder={t("form.phone.placeholder")}
          />
        </Form.Item>
        <Form.Item label={t("form.subject.label")} name="subject">
          <Input
            size="large"
            className="!rounded-sm"
            placeholder={t("form.subject.placeholder")}
          />
        </Form.Item>
        <Form.Item
          className="col-span-1 md:col-span-2"
          label={t("form.message.label")}
          name="message"
        >
          <Input.TextArea
            size="large"
            className="!rounded-sm"
            placeholder={t("form.message.placeholder")}
          />
        </Form.Item>
      </Form>
      <Button size="large" type="primary" className="!rounded-sm mt-5">
        {t("form.sendButton")}
      </Button>
    </div>
  );
}

export default ContactUs;

const connections = [
  { icon: <IoPhonePortraitOutline />, title: TEL_NUMBER },
  { icon: <CiMail />, title: "send us as Email" },
  { icon: <MdOutlineMessage />, title: "Connect on Manager" },
  { icon: <FaXTwitter />, title: "Tweet us" },
];
