import { Dropdown, Space } from "antd";
import Container from "../container";
import { Paragraph } from "../typography";
import { TEL_NUMBER, WORKDAYS } from "../../constants";
import { FaRegUser } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import uz from "@images/flags/uz.svg";
import ru from "@images/flags/ru.svg";
import en from "@images/flags/en.svg";
import { useCallback, useMemo } from "react";

function Header1() {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation("", {
    keyPrefix: "landingPage.header.section1",
  });
  const location = useLocation();
  const departments = useMemo(
    () => [
      // { title: t("track"), slug: `/${i18n.language}/track` },
      { title: t("blog"), slug: `/${i18n.language}/blog/all` },
      { title: t("contacts"), slug: `/${i18n.language}/contacts/contact-us` },
    ],
    [t, i18n]
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
          {t("phone", { workDays: WORKDAYS, number: TEL_NUMBER })}
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
            menu={{
              items: translateItems.map((item) => ({
                key: item.key,
                label: (
                  <Space className="w-full">
                    <img className="w-[20px]" src={item.flag} alt={item.flag} />
                    <Paragraph className="!m-0">{item.title}</Paragraph>
                  </Space>
                ),
                onClick: async () => {
                  await i18n.changeLanguage(item.key);
                  navigate(navigateChangeLang(item.key), {
                    replace: true,
                  });
                },
              })),
            }}
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
              navigate(
                `/${i18n.language}/${
                  localStorage.getItem("token")
                    ? "my-profile"
                    : "sign-up"
                }`
              );
            }}
            className="!mb-0 text-gray-500 cursor-pointer flex gap-2 items-center"
          >
            <FaRegUser />
            {localStorage.getItem("token")
              ? t("profile")
              : t("login-register")}
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
