import { Button, Divider, Space } from "antd";
import Container from "../container";
import { Paragraph, Text } from "../typography";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import aplleLogo from "../../../public/images/app-store.svg";
import playMarketLogo from "../../../public/images/google-play.svg";
import { EMAIL, TEL_NUMBER } from "../../constants";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";

const socialIcons = [
  <FaFacebookF />,
  <FaInstagram />,
  <FaXTwitter />,
  <FaYoutube />,
  <FaPinterestP />,
];
const AppClassName = "cursor-pointer hover:scale-105 transition-all";

function Footer({ className }: { className?: string }) {
  const { t } = useTranslation("", { keyPrefix: "landingPage.footer" });
  const goTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={`!text-white bg-gray-900 mb-[70px] md:mb-0 ${className}`}>
      <Container className="grid  justify-between grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 py-[40px]">
        <div>
          <Paragraph className="font-bold text-white uppercase">
            {t("help.title")}
          </Paragraph>
          <ul className="text-gray-500">
            <li>{t("help.faq")}</li>
            <li>{t("help.track")}</li>
            <li>Contacts</li>
            <li>{t("help.blog")}</li>
          </ul>
        </div>
        <div>
          <Paragraph className="font-bold text-white uppercase">
            {t("information.title")}
          </Paragraph>
          <ul className="text-gray-500">
            <li>{t("information.newArrivals")}</li>
            <li>{t("information.trandingNow")}</li>
            <li>Sales</li>
            <li>{t("information.brands")}</li>
          </ul>
        </div>
        <div>
          <Paragraph className="font-bold text-white uppercase">
            {t("getInTouch.title")}
          </Paragraph>
          <ul className="text-gray-500">
            <li>
              <Link to={"/"}>
                <span className="font-[400] text-slate-300">
                  {t("getInTouch.call")}
                </span>{" "}
                : {TEL_NUMBER}
              </Link>
            </li>
            <li>
              <Link to={"/" + EMAIL}>
                <span className="font-[400] text-slate-300">
                  {t("getInTouch.email")}
                </span>
                : {EMAIL}
              </Link>
            </li>
            <li>
              <Space className="mt-3">
                {socialIcons.map((item, index) => (
                  <Button
                    className="text-white bg-gray-800 border-none bg-opacity-80 !hover:bg-gray-900"
                    key={index}
                    icon={item}
                  ></Button>
                ))}
              </Space>
            </li>
          </ul>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <Paragraph className="font-bold text-white uppercase">
            {t("download.title")}
          </Paragraph>
          <ul className="text-gray-500">
            <li>
              <Space>
                <img className={AppClassName} src={aplleLogo} alt="" />
                <img className={AppClassName} src={playMarketLogo} alt="" />
              </Space>
            </li>
          </ul>
        </div>
      </Container>
      <Divider className="bg-slate-700 !mb-0" />
      <Container className="flex items-center justify-between py-4">
        <Text className="!text-gray-500">© {t("copyRight")}</Text>
        <Text
          onClick={goTop}
          className="!text-gray-500 font-semibold hidden md:block duration-300 hover:!text-white cursor-pointer"
        >
          {t("goTop")}
        </Text>
      </Container>
    </div>
  );
}

export default Footer;
