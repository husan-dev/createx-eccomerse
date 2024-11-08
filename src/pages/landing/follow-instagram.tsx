import { Button, Space } from "antd";
import Container from "@components/container";
import { Title } from "@components/typography";
import { FaInstagram } from "react-icons/fa6";
import image3 from "@images/landing/follow-instagram/image.svg";
import image2 from "@images/landing/follow-instagram/image-1.svg";
import image1 from "@images/landing/follow-instagram/image-2.svg";
import { useTranslation } from "react-i18next";

const images = [image1, image2, image3];

function FollowInstagram() {
  const { t } = useTranslation("", {
    keyPrefix: "landingPage.followInstagram",
  });
  return (
    <Container className="flex flex-col md:flex-row gap-5 justify-between my-[100px] lg:my-[180px]">
      <div className="w-full lg:w-[300px] flex items-center">
        <div>
          <Title level={4} className="!font-normal !text-lg uppercase">
            {t("title")}
          </Title>
          <Title className="!font-bold !mt-0 !text-4xl">@createx_store</Title>
          <div className="grid grid-cols-3 gap-5 py-[20px] justify-evenly lg:hidden">
            {images.map((item, index) => (
              <img
                className="w-full aspect-ratio"
                key={index}
                src={item}
                alt="notFound"
              />
            ))}
          </div>
          <Button
            className="!rounded-sm mt-8"
            icon={<FaInstagram />}
            size="large"
          >
            {t("button")}
          </Button>
        </div>
      </div>
      <Space className="hidden lg:flex">
        {images.map((item, index) => (
          <img
            className="w-full aspect-ratio"
            key={index}
            src={item}
            alt="notFound"
          />
        ))}
      </Space>
    </Container>
  );
}

export default FollowInstagram;
