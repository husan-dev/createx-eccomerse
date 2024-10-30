import Container from "../container";
import logo from "../../../public/images/logo.svg";
import { Paragraph, Title } from "../typography";
import { Button, Divider, Drawer, Input, Space, Tag } from "antd";
import { GoCreditCard } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Header1 from "./header-1";

function Header() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation("", {
    keyPrefix: "landingPage.header.section2",
  });
  const [dCategory, setDCategory] = useState(false);
  const isCartOpen = !!searchParams.get("cart");

  const category = [
    { title: t("womens") },
    { title: t("mens") },
    { title: t("girls") },
    { title: t("boys") },
  ];
  // useEffect(() => {
  //   // body elementiga overflow hidden qo'shish
  //   document.body.style.overflow = dCategory ? "hidden" : "auto";

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [dCategory]);

  return (
    <>
      <div className="sticky top-0 z-50">
        <Header1 />
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
                  onClick={() => navigate("my-profile/wishlist")}
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
