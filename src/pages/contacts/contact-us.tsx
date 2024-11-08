import { Paragraph, Title } from "@components/typography";
import { Button, Form, Input } from "antd";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { TEL_NUMBER } from "@src/constants";

function ContactUs() {
  return (
    <div>
      <Title className="!text-[20px] !mb-5">
        If you have any questions, concerns or comments, we would love to hear
        from you! Submit your query using any of the methods below:
      </Title>
      <ul className="mb-5">
        {connections.map((item, index) => (
          <li key={index} className="flex items-center gap-2 !text-main mb-2">
            {item.icon}{" "}
            <Paragraph className="!m-0 text-main">{item.title}</Paragraph>
          </li>
        ))}
      </ul>

      <Title className="!text-[20px] !mb-5">
        Or get in touch with us by completing the below form:
      </Title>
      <Form
        layout="vertical"
        className="grid grid-cols-1 mt-8 sm:grid-cols-2 gap-x-7"
      >
        <Form.Item label="Full Name" name="name">
          <Input
            size="large"
            className="!rounded-sm"
            placeholder="your full name"
          />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input
            type="email"
            size="large"
            className="!rounded-sm"
            placeholder="your working email"
          />
        </Form.Item>
        <Form.Item label="Phone" name="phone">
          <Input
            size="large"
            className="!rounded-sm"
            placeholder="your phone number"
          />
        </Form.Item>
        <Form.Item label="Subject" name="subject">
          <Input
            size="large"
            className="!rounded-sm"
            placeholder="Title your message"
          />
        </Form.Item>
        <Form.Item
          className="col-span-1 md:col-span-2"
          label="Message"
          name="message"
        >
          <Input.TextArea
            size="large"
            className="!rounded-sm"
            placeholder="Write your message here"
          />
        </Form.Item>
      </Form>
      <Button size="large" type="primary" className="!rounded-sm mt-5">
        Send message
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
