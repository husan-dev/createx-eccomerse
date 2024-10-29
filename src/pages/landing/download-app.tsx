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
    <div className="bg-gray-900 mt-[150px]">
      <Container className="flex  justify-end gap-[160px] relative">
        <img
          className="absolute bottom-0 left-0 h-[260px]"
          src={image}
          alt={"motFound"}
        />
        <div className="py-[40px] w-[600px]">
          <Title level={2} className="!text-white !mb-7">
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
