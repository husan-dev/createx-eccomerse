import { useTranslation } from "react-i18next";
import logo2 from "@images/landing/adventages/ic-call-center.svg";
import logo4 from "@images/landing/adventages/ic-credit-card.svg";
import logo1 from "@images/landing/adventages/ic-delivery.svg";
import logo3 from "@images/landing/adventages/ic-shield.svg";
import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";

const data = [
  {
    logo: logo1,
    title: "Fast Worldwide Shipping",
    info: "Get free shipping over $250",
  },
  {
    logo: logo2,
    title: "24/7 Customer Support",
    info: "Friendly 24/7 customer support",
  },
  {
    logo: logo3,
    title: "Money Back Guarantee",
    info: "We return money within 30 days",
  },
  {
    logo: logo4,
    title: "Secure Online Payment",
    info: "Accept all major credit cards",
  },
];

function Adventages() {
  const { t } = useTranslation();
  const amount = 250;
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start  gap-8 sm:gap-6 md:gap-5 mt-[120px]">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center h-full"
        >
          <img src={item.logo} className="mb-6" alt="notFound" />
          <div className="flex flex-col justify-center flex-grow h-full">
            <Title
              level={4}
              className="font-bold text-center whitespace-pre-line"
            >
              {t(`landingPage.adventage.${index + 1}.title`)}
            </Title>
            <Paragraph className="text-center">
              {t(`landingPage.adventage.${index + 1}.desc`, { amount })}
            </Paragraph>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default Adventages;
