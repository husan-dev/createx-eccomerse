import { Button, Input, Radio, Space } from "antd";
import { Paragraph, Title } from "../typography";
import image from "../../../public/images/subscribe.svg";
import Container from "../container";

const buttons = ["women", "men", "girls", "boys,"];

function Subscribe() {
  return (
    <div className="py-10 bg-gray-200">
      <Container className="grid items-center grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-2 w-[400px] max-w-[400px]">
          <Title className="!mb-0 !font-bold !text-lg">
            Subscribe for updates
          </Title>
          <Paragraph>
            Subscribe for exclusive early sale access and new arrivals.
          </Paragraph>
          <Space className="mb-4">
            {buttons.map((item, index) => (
              <Button size="middle" key={index}>
                {item}
              </Button>
            ))}
          </Space>
          <div className="">
            <Paragraph>Email</Paragraph>
            <Space.Compact className="!rounded-none h-[45px]">
              <Input
                className="!w-full !rounded-sm"
                size="large"
                placeholder="enter Email"
              />
              <Button className="!rounded-sm h-[45px]" type="primary">
                Subscribe
              </Button>
            </Space.Compact>
          </div>
          <Radio>I agree to receive communications from Createx Store.</Radio>
        </div>
        <img className="mx-auto" src={image} alt="" />
      </Container>
    </div>
  );
}

export default Subscribe;
