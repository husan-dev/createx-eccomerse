import { Dropdown, Menu, Space } from "antd";
import Container from "../container";
import { Paragraph } from "../typography";
import { TEL_NUMBER } from "../../constants";
import { FaRegUser } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import uz from "../../../public/images/flags/uz.svg";
import ru from "../../../public/images/flags/ru.svg";
import en from "../../../public/images/flags/en.svg";
import { useCallback, useMemo } from "react";

function Header1() {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const departments = useMemo(
    () => [
      { title: t("landingPage.header.section1.track"), slug: "track" },
      { title: t("landingPage.header.section1.blog"), slug: "blog" },
      { title: t("landingPage.header.section1.contacts"), slug: "contacts" },
    ],
    [t]
  );
  const pathname = location.pathname.split("/");
  const navigateChangeLang = useCallback(
    (lang: string) =>
      pathname.length === 2
        ? `/${lang}`
        : `/${lang}/${pathname.slice(2).join("/")}`,
    [pathname]
  );
  console.log(pathname, "path", import.meta.env.VITE_BASE_URL);
  return (
    <div className="hidden bg-gray-900 md:block">
      <Container className="flex justify-between py-2">
        <Paragraph className="!text-gray-500 !mb-0">
          {`Available 24/7 at ${TEL_NUMBER}`}
        </Paragraph>
        <Space className="hidden lg:flex" size={"large"}>
          {departments.map((item, index) => (
            <Paragraph
              className={`!mb-0 ${
                location.pathname.split("/")[1] === item.slug
                  ? "text-white"
                  : "text-gray-500"
              }  cursor-pointer hover:text-gray-300 duration-300`}
              key={index}
              onClick={() => navigate(`${item.slug}`)}
            >
              {item.title}
            </Paragraph>
          ))}
        </Space>
        <Space size={"large"}>
          <Dropdown
            overlay={
              <Menu>
                {translateItems.map((item) => (
                  <Menu.Item key={item.key}>
                    <Space
                      onClick={async () => {
                        await i18n.changeLanguage(item.key);
                        navigate(navigateChangeLang(item.key), {
                          replace: true,
                        });
                      }}
                    >
                      <img
                        className="w-[20px]"
                        src={item.flag}
                        alt={item.flag}
                      />
                      <Paragraph className="!m-0">{item.title}</Paragraph>
                    </Space>
                  </Menu.Item>
                ))}
              </Menu>
            }
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space align="center">
                <img
                  className="w-[20px] h-[14px] mt-1"
                  src={
                    i18n.language == "uz" ? uz : i18n.language == "ru" ? ru : en
                  }
                  alt=""
                />
                <div className="flex items-center">
                  <Paragraph className="!mb-0 text-gray-500">
                    {i18n.language == "uz"
                      ? "Uz/₩"
                      : i18n.language == "ru"
                      ? "Ru/₽"
                      : "En/$"}
                  </Paragraph>
                  <MdKeyboardArrowDown className="text-gray-500" />
                </div>
              </Space>
            </a>
          </Dropdown>
          <Paragraph
            onClick={() => {
              navigate("sign-up");
            }}
            className="!mb-0 text-gray-500 cursor-pointer flex gap-2 items-center"
          >
            <FaRegUser /> {t("landingPage.header.section1.login-register")}
          </Paragraph>
        </Space>
      </Container>
    </div>
  );
}

export default Header1;

const translateItems = [
  {
    title: "En",
    flag: en,
    key: "en",
  },
  {
    title: " Ru",
    flag: ru,
    key: "ru",
  },
  {
    title: "Uz",
    flag: uz,
    key: "uz",
  },
];
