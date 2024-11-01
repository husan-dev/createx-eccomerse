import Container from "../../components/container";
import image from "../../../public/images/landing/download-app.svg";
import { Title } from "../../components/typography";
import { Space } from "antd";
import playMarket from "../../../public/images/google-play.svg";
import appStore from "../../../public/images/app-store.svg";
import { useTranslation } from "react-i18next";

function DownloadApp() {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-900 mt-[80px] sm:mt-[100px] md:mt-[150px]">
      <Container className="grid grid-cols-1 gap-5 md:grid-cols-2 md:relative">
        <div className="flex items-center">
          <img
            className="left-5 -translate-y-5 md:translate-y-0 lg:absolute lg:bottom-0 md:h-[300px] lg:h-[260px]"
            src={image}
            alt={"motFound"}
          />
        </div>
        <div className="pb-[40px]   md:py-[40px]">
          <Title level={2} className="!text-white !text-2xl sm:!text-3xl !mb-7">
            {t("landingPage.downloadApp.title")}
          </Title>
          <Space>
            <img src={playMarket} alt="notFound" />
            <img src={appStore} alt="notFound" />
          </Space>
        </div>
      </Container>
    </div>
  );
}

export default DownloadApp;
