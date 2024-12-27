import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Navigation, Autoplay } from "swiper/modules";
import { Button } from "antd";
import styled from "@emotion/styled";
import Container from "@components/container";
import { useRef, useState } from "react";
import { Title } from "@components/typography";
import clsx from "clsx";
import bannerImg1 from "@images/landing/banner/banner1.jpg";
import bannerImg2 from "@images/landing/banner/banner2.jpg";
import bannerImg3 from "@images/landing/banner/banner3.jpg";
import bannerImg4 from "@images/landing/banner/banner4.jpg";
function Banner() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [slideCount, setSlideCount] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const images = [bannerImg1, bannerImg2, bannerImg3, bannerImg4];
  const handleSwiperInit = (swiper: SwiperCore) => {
    setSlideCount(swiper.slides.length);
  };
  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveSlide(swiper.activeIndex);
  };
  const handlePaginationClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // SwiperCore API'si orqali indeksga o'tish
    }
  };
  console.log(activeSlide, slideCount, "swiper banner");
  return (
    <SwiperProv
      onSwiper={(swiper: SwiperCore) => (swiperRef.current = swiper)}
      onSlideChange={handleSlideChange}
      onInit={handleSwiperInit}
      navigation={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Navigation, Autoplay]}
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
          navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          },
        },
        1024: {
          slidesPerView: 1,
          navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          },
        },
      }}
      className="px-5 border border-solid  md:px-0 my-5 md:my-0 aspect-[3/2] md:aspect-[3/2.075] lg:aspect-[3/1.7] xl:aspect-[7/2.9]"
    >
      {images.map((item, index) => (
        <SwiperSlide key={index} className="">
          <img
            className="object-cover object-[20%_20%] w-full h-full "
            src={item}
            alt="banner image"
          />
        </SwiperSlide>
      ))}

      <Container className="absolute !w-[50%] left-0 bottom-[160px] !z-[5]">
        <div
          className={clsx("hidden md:grid w-full gap-1", {
            "grid-cols-1": slideCount === 1,
            "grid-cols-2": slideCount === 2,
            "grid-cols-3": slideCount === 3,
            "grid-cols-4": slideCount === 4,
            "grid-cols-5": slideCount === 5,
          })}
        >
          {Array(slideCount)
            .fill(null)
            .map((_i, index) => (
              <div
                onClick={() => handlePaginationClick(index)}
                key={index}
                className={clsx("   hover:cursor-pointer hover:opacity-100", {
                  "opacity-100": activeSlide === index + 1,
                  "opacity-30": activeSlide !== index,
                })}
              >
                <Title className="!text-main !m-2 !text-[30px] font-bol">{`0${
                  index + 1
                }`}</Title>
                <div className="h-[2px] bg-main grou"></div>
              </div>
            ))}
        </div>
      </Container>
      <Button
        size="large"
        className="hidden text-main swiper-button-prev md:flex"
      >
        <FaArrowLeft className="translate-x-1" />
      </Button>
      <Button
        size="large"
        className="hidden text-main swiper-button-next md:flex"
      >
        <FaArrowRight className="translate-x-1" />
      </Button>
    </SwiperProv>
  );
}

const SwiperProv = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    width: 45px;
    height: 45px;
    font-size: 20px;
    border-radius: 50%;
    padding: 8px !important;
  }
`;
export default Banner;
