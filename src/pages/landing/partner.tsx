import Container from "../../components/container";
import brandLogo1 from "../../../public/images/landing/pertners/brand-logo.svg";
import brandLogo2 from "../../../public/images/landing/pertners/brand-logo-1.svg";
import brandLogo3 from "../../../public/images/landing/pertners/brand-logo-2.svg";
import brandLogo4 from "../../../public/images/landing/pertners/brand-logo-3.svg";
import brandLogo5 from "../../../public/images/landing/pertners/brand-logo-4.svg";
import brandLogo6 from "../../../public/images/landing/pertners/brand-logo-5.svg";
import { Swiper, SwiperSlide } from "swiper/react";

function Partners() {
  return (
    <Container className="flex flex-wrap justify-between py-6 my-[80px] md:my-[120px]">
      <Swiper
        breakpoints={{
          200: {
            slidesPerView: 2.5,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        spaceBetween={10}
      >
        {images.map((item, index) => (
          <SwiperSlide className="border rounded-sm cursor-pointer" key={index}>
            <img className="mx-auto my-1" src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Partners;

const images = [
  brandLogo1,
  brandLogo2,
  brandLogo3,
  brandLogo4,
  brandLogo5,
  brandLogo6,
];
