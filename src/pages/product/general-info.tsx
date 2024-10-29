import { Rate } from "antd";
import { Paragraph, Title } from "../../components/typography";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";

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
            <Title></Title>
            <div>
              <Rate defaultValue={4} disabled />
              <Paragraph>12 reviews</Paragraph>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
