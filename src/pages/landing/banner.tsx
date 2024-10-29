import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "@emotion/styled";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Pagination, Navigation } from "swiper/modules";

function Banner() {
  return (
    <div>
      <StyledSwiper
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="h-[800px] "
        modules={[Pagination, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="bg-red-500">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-red-600">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-red-700">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-red-800">Slide 4</SwiperSlide>
        <div className={`swiper-button-prev`}>
          <FaArrowLeft />
        </div>
        <div className="swiper-button-next">
          <FaArrowRight />
        </div>
      </StyledSwiper>
    </div>
  );
}
const StyledSwiper = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    background-color: white !important;
    height: 40px;
    width: 40px;
    border-radius: 100%;
    aspect-ratio: 1/1 !important;
    color: black;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    content: "";
  }
`;

export default Banner;
