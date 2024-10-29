import { Button, Space } from "antd";
import Container from "../../components/container";
import { Title } from "../../components/typography";
import { FaInstagram } from "react-icons/fa6";
import image3 from "../../../public/images/landing/follow-instagram/image.svg";
import image2 from "../../../public/images/landing/follow-instagram/image-1.svg";
import image1 from "../../../public/images/landing/follow-instagram/image-2.svg";

const images = [image1, image2, image3];

function FollowInstagram() {
  return (
    <Container className="flex justify-between my-[180px]">
      <div>
        <Title level={4} className="!font-normal uppercase">
          Follow us on Instagram
        </Title>
        <Title className="!font-bold !mt-0">@createx_store</Title>
        <Button
          className="!rounded-sm mt-8"
          icon={<FaInstagram />}
          size="large"
        >
          Follow Instagram
        </Button>
      </div>
      <Space>
        {images.map((item, index) => (
          <img className="aspect-ratio" key={index} src={item} alt="notFound" />
        ))}
      </Space>
    </Container>
  );
}

export default FollowInstagram;
