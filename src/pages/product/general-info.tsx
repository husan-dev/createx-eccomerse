import {
  Button,
  Collapse,
  CollapseProps,
  InputNumber,
  Rate,
  Space,
} from "antd";
import { Paragraph, Title } from "@components/typography";
import { Swiper, SwiperSlide } from "swiper/react";
import visaL from "@images/payment-types/visa.svg";
import masterCardL from "@images/payment-types/master-card.svg";
import PayPalL from "@images/payment-types/pay-pal.svg";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import { FaMinus, FaPlus } from "react-icons/fa6";

function ProductInfo() {
  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <Swiper
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <div className="flex justify-between">
            <Title>xzcxzcxz</Title>
            <div>
              <Rate defaultValue={4} disabled />
              <Paragraph>12 reviews</Paragraph>
            </div>
          </div>
          <div className="flex justify-between gap-7">
            <InputNumber className="!rounded-sm" />
            <Button
              type="primary"
              size={"large"}
              className="!rounded-sm w-[50%]"
              icon={<PiShoppingCartLight />}
            >
              Add to cart
            </Button>
            <Button
              color="primary"
              size={"large"}
              className="!rounded-sm w-[30%]"
              icon={<FaRegHeart />}
            >
              Favorite
            </Button>
          </div>
          <Collapse
            className="rounded-md"
            expandIconPosition={"end"}
            bordered={false}
            ghost={true}
            expandIcon={({ isActive }) =>
              isActive ? (
                <FaMinus className="!text-main !text-lg" />
              ) : (
                <FaPlus className="!text-main  !text-lg" />
              )
            }
            items={collapseItems}
          />
          <div className="flex mb-7">
            <Paragraph className="!m-0 text-lg">Share :</Paragraph>
            <Space>
              da {"asda"} {"sadsa"}
            </Space>
          </div>

          <Space size={"middle"}>
            {paymentTypes.map((item, index) => (
              <img
                className="w-[100px] cursor-pointer  transition-all hover:scale-105"
                key={index}
                src={item.logo}
              />
            ))}
          </Space>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;

const paymentTypes = [
  { logo: visaL },
  { logo: masterCardL },
  { logo: PayPalL },
];
const collapseItems: CollapseProps["items"] = [
  {
    key: "1",
    label: <Paragraph className="font-bold !m-0 text-md">Delivery</Paragraph>,
    children: "asdsdsa",
  },
  {
    key: "2",
    label: <Paragraph className="font-bold !m-0 text-md">Returns</Paragraph>,
    children:
      "You have 60 days to return the item(s) using any of the following methods:",
  },
];
