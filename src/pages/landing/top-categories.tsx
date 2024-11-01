import Container from "../../components/container";
import kidImg from "../../../public/images/landing/top-categoies/image.svg";
import menImg from "../../../public/images/landing/top-categoies/image-1.svg";
import womenImg from "../../../public/images/landing/top-categoies/image-2.svg";
import { Title } from "../../components/typography";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

function TopCategories() {
  const { t } = useTranslation();
  const cards = useMemo(() => {
    return [
      { img: womenImg, title: t("landingPage.topCategories.womens") },
      { img: menImg, title: t("landingPage.topCategories.mens") },
      { img: kidImg, title: t("landingPage.topCategories.kids") },
    ];
  }, [t]);
  return (
    <div>
      <Container className="">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {cards.map((item, index) => (
            <div key={index}>
              <img src={item.img} className="mx-auto mb-4" alt="" />
              <Title level={5} className="font-bold text-center">
                {item.title}
              </Title>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default TopCategories;
