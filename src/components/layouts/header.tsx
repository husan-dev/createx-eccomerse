import Container from "../container";
import logo from "../../../public/images/logo.svg";
import { Paragraph, Title } from "../typography";
import {
  Button,
  Divider,
  Drawer,
  Dropdown,
  Input,
  Menu,
  Space,
  Tag,
} from "antd";
import { GoCreditCard } from "react-icons/go";
import { IoSearch } from "react-icons/io5";

import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import uz from "../../../public/images/flags/uz.svg";
import ru from "../../../public/images/flags/ru.svg";
import en from "../../../public/images/flags/en.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { TEL_NUMBER } from "../../constants";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, i18n } = useTranslation();
  const [dCategory, setDCategory] = useState(false);
  const isCartOpen = !!searchParams.get("cart");
  // useEffect(() => {
  //   // body elementiga overflow hidden qo'shish
  //   document.body.style.overflow = dCategory ? "hidden" : "auto";

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [dCategory]);
  console.log(i18n);
  const category = [
    { title: t("landingPage.header.section2.womens") },
    { title: t("landingPage.header.section2.mens") },
    { title: t("landingPage.header.section2.girls") },
    { title: t("landingPage.header.section2.boys") },
  ];
  const departments = [
    { title: t("landingPage.header.section1.track"), slug: "track" },
    { title: t("landingPage.header.section1.blog"), slug: "blog" },
    { title: t("landingPage.header.section1.contacts"), slug: "contacts" },
  ];
  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="bg-gray-900">
          <Container className="flex justify-between py-2">
            <Paragraph className="!text-gray-500 !mb-0">
              {`Available 24/7 at ${TEL_NUMBER}`}
            </Paragraph>
            <Space size={"large"}>
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
                          onClick={() => {
                            i18n.changeLanguage(item.key);
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
                        i18n.language == "uz"
                          ? uz
                          : i18n.language == "ru"
                          ? ru
                          : en
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
                  navigate("/sign-up");
                }}
                className="!mb-0 text-gray-500 cursor-pointer flex gap-2 items-center"
              >
                <FaRegUser /> {t("landingPage.header.section1.login-register")}
              </Paragraph>
            </Space>
          </Container>
        </div>
        <div className="relative bg-white ">
          <Container className="flex items-center justify-between py-4 ">
            <div className="flex gap-[60px]">
              <img
                className="cursor-pointer"
                onClick={() => {
                  navigate("");
                }}
                src={logo}
                alt=""
              />
              <Space className="gap-[40px]">
                {category.map((item, index) => (
                  <Paragraph
                    onClick={() => {
                      setDCategory(!dCategory);
                    }}
                    className="font-semibold text-[16px] capitalize cursor-pointer !mb-0"
                    key={index}
                  >
                    {item.title}
                  </Paragraph>
                ))}
              </Space>
            </div>
            <div className="flex gap-8">
              <Input
                size="large"
                placeholder="Search for products"
                className="w-[380px] !rounded-none"
                suffix={<IoSearch />}
              />

              <Space>
                <Space
                  onClick={() => navigate("/my-profile/wishlist")}
                  className="cursor-pointer"
                >
                  <FaRegHeart />0
                </Space>
                <Divider type="vertical" />
                <Space
                  className="cursor-pointer"
                  onClick={() => {
                    setSearchParams({ cart: "true" });
                  }}
                >
                  <PiShoppingCartLight />
                  <Tag className="bg-green-400 border-none">0</Tag>
                </Space>
              </Space>
            </div>
          </Container>
          <Divider className="!m-0" />
          <div
            className={`absolute h-screen ${
              !dCategory ? "hidden" : "bg-black bg-opacity-50 -z-[40]"
            } w-full `}
          ></div>
          <div
            className={`absolute duration-500 ease-in-out -z-[10] w-full p-10 transform transition-transform ${
              dCategory ? "translate-y-0" : "-translate-y-full"
            } bg-white border`}
          >
            adasdsdas dasd as dasD AS
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="bg-[#17696A]">
        <Container className="text-center">sadasdas</Container>
      </div>
      <Drawer
        bodyStyle={{ padding: 0 }}
        open={isCartOpen}
        onClose={() => setSearchParams({})}
        title={"Your Cart (0)"}
        width={320}
      >
        <div className="flex flex-col justify-between h-full">
          <Title>asdasdas</Title>
          <div>
            <Divider className="!mb-0" />
            <div className="p-5">
              <div className="flex items-end justify-between mb-5 ">
                <Paragraph className="!m-0 !opacity-50 font-semibold">
                  Subtotal
                </Paragraph>
                <Title level={4} className=" !m-0 !font-bold">
                  1200.$
                </Title>
              </div>
              <Button
                icon={<GoCreditCard />}
                size="large"
                className="w-full rounded-md"
                type="primary"
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default Header;

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
