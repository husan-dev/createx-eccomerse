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
        breakpoints={{
          200: {
            slidesPerView: 1.1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 1.1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            pagination: {
              clickable: true,
            },
            modules: [Pagination, Navigation],
            navigation: {
              prevEl: "swiper-button-prev",
              nextEl: "swiper-button-next",
            },
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        className="px-5 md:px-0 my-5 md:my-0 aspect-[3/2] md:aspect-[6/5] lg:aspect-[7/2.9]"
      >
        <SwiperSlide className="bg-red-500 ">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-red-600 ">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-red-700 ">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-red-800 ">Slide 4</SwiperSlide>
        <div className={`swiper-button-prev hidden md:block`}>
          <FaArrowLeft />
        </div>
        <div className="hidden swiper-button-next md:block">
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
