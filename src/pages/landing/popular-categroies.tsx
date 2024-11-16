import Container from "@components/container";
import { Title } from "@components/typography";
import tops from "@images/landing/popular-categories/image-5.png";
import tShirts from "@images/landing/popular-categories/image-4.png";
import caps from "@images/landing/popular-categories/image-3.png";
import sandals from "@images/landing/popular-categories/image-2.png";
import jackets from "@images/landing/popular-categories/image-1.png";
import coats from "@images/landing/popular-categories/image.png";
import { useTranslation } from "react-i18next";

function PopularCategroies() {
  const { t } = useTranslation("", {
    keyPrefix: "landingPage.popularCategories",
  });
  return (
    <Container className="py-[50px]">
      <Title className="text-center !mb-7">{t("title")}</Title>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-7">
        {items.map((item) => (
          <div key={item.value} className="flex flex-col">
            <img src={item.img} alt="" />
            <Title className="!text-[25px] !mt-5 text-center">
              {t(`categories.${item.value}`)}
            </Title>
          </div>
        ))}
      </div>
    </Container>
  );
}
const items = [
  { value: "tops", img: tops },
  { value: "tShirts", img: tShirts },
  { value: "caps", img: caps },
  { value: "sandals", img: sandals },
  { value: "jackets", img: jackets },
  { value: "coats", img: coats },
];

export default PopularCategroies;
