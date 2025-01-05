import Container from "../container";
import logo from "../../../public/images/logo.svg";
import { Paragraph, Title } from "../typography";
import { Button, Divider, Drawer, Empty, Input, Space, Tag } from "antd";
import { GoCreditCard } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Header1 from "./header-1";
import { getHumanCategories, getProductCategories } from "@api/products";
import { useQuery } from "@tanstack/react-query";
import { HumanCategory, ProductMainCategory } from "@typess/products";
function Header({ className }: { className?: string }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { i18n } = useTranslation();
  const [searchDiv, setSearchDiv] = useState(false);
  const [dCategory, setDCategory] = useState(false);
  const isCartOpen = !!searchParams.get("cart");
  const {
    data: humanCategories,
    isLoading: isHumanCategoriesLoading,
    isError: isHumanCategoriesError,
  } = useQuery<HumanCategory[]>({
    queryKey: ["humanCategories", i18n.language],
    queryFn: () => getHumanCategories(i18n.language),
  });
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useQuery<ProductMainCategory[]>({
    queryKey: ["categories", i18n.language],
    queryFn: () => getProductCategories(i18n.language),
  });

  if (isHumanCategoriesError) return <div>Error</div>;
  if (isCategoriesError) return <div>Error</div>;

  return (
    <>
      <div className={`!sticky top-0 z-50 ${className}`}>
        <Header1 />
        <div className="relative bg-white ">
          <Container className="flex items-center justify-between py-4 ">
            <div className="flex md:gap-[60px]">
              <img
                loading="lazy"
                className="cursor-pointer w-[120px] h-[30px]"
                onClick={() => {
                  navigate(`/${i18n.language}`);
                }}
                src={logo}
                alt="logo"
              />
              <Space className="hidden xl:flex gap-[40px]">
                {isHumanCategoriesLoading ? (
                  <div className="flex gap-4 animate-pulse">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className="w-[100px] h-[24px] bg-gray-200 rounded-md"
                      ></div>
                    ))}
                  </div>
                ) : (
                  humanCategories?.map((item, index) => (
                    <Paragraph
                      tabIndex={-1}
                      onMouseDown={(e) => {
                        e.preventDefault(); // Fokusni saqlab qolish uchun
                        setDCategory(true);
                      }}
                      onBlur={() => setDCategory(false)}
                      className="font-semibold text-[16px] capitalize cursor-pointer !mb-0"
                      key={index}
                    >
                      {item.name}
                    </Paragraph>
                  ))
                )}
              </Space>
            </div>
            <div className="hidden gap-8 md:flex">
              <div className="relative w-[380px] ">
                <Input
                  size="large"
                  onFocus={() => setSearchDiv(true)}
                  onBlur={() => setTimeout(() => setSearchDiv(false), 0)}
                  placeholder="Search for products"
                  className="!rounded-none hidden w-full  md:flex"
                  suffix={<IoSearch />}
                />
                {searchDiv && (
                  <div
                    onClick={() => setSearchDiv(true)}
                    className="absolute hidden w-full p-2 bg-white border rounded-sm shadow-lg md:block top-14 "
                  >
                    <Empty />
                  </div>
                )}
              </div>

              <Space className="hidden md:flex">
                <Space
                  onClick={() =>
                    navigate(`/${i18n.language}/my-profile/wishlist`)
                  }
                  className="cursor-pointer"
                >
                  <FaRegHeart className="mt-1" />0
                </Space>
                <Divider type="vertical" className="bg-black opacity-50" />
                <Space
                  className="cursor-pointer"
                  onClick={() => {
                    setSearchParams({ cart: "true" });
                  }}
                >
                  <PiShoppingCartLight className="mt-1" />
                  <Tag className="text-white bg-green-400 border-none">0</Tag>
                </Space>
              </Space>
            </div>
          </Container>
          <Divider className="!m-0" />
            <div
              className={`absolute h-screen -top-[42px] bg-black bg-opacity-50 -z-[40]
               w-full `}
            ></div>
          )}
          <div
            className={`absolute -z-[10] w-full p-10 ${
              dCategory
                ? "translate-y-0  duration-500 ease-in-out  transform transition-transform"
                : "-translate-y-full"
            } bg-white border`}
          >
            <div className="grid w-auto grid-cols-3 gap-5 mx-auto ">
              {categories?.map((item) => (
                <div key={item.order}>
                  <div className="mb-3">
                    <Title className="!m-0 !inline-block !font-semibold hover:!text-main hover:underline !cursor-pointer !text-[16px] uppercase">
                      {item.name}
                    </Title>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {item.subCategories.map((subItem) => (
                      <li key={subItem.order}>
                        <Paragraph className="!m-0 !inline-block !cursor-pointer hover:!text-main">
                          {subItem.name}
                        </Paragraph>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Drawer
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
