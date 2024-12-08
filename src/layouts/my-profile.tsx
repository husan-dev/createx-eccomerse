import { Space } from "antd";
import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoEyeOutline, IoBagOutline } from "react-icons/io5";
import { BsDoorClosed } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa6";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "@components/layouts/header";
import Footer from "@components/layouts/footer";
import MobileMenuBar from "@components/layouts/mobile-menu-bar";

function MyProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const paths = location.pathname.split("/").slice(1);
  return (
    <>
      <Header className="hidden md:block" />
      <Container className="py-[30px] md:py-[50px] pb-[70px] mb-[70px] gap-5 sm:gap-10 md:gap-10 flex flex-col md:flex-row h-screen md:h-auto md:justify-between">
        <div className="flex flex-col border self-start divide-y rounded-md  w-full min-w-[200px]  md:w-[250px]">
          <div className="p-4">
            <Title level={4} className="!mb-1">
              Annete Pikle
            </Title>
            <Paragraph className="!m-0">example@gmail.com</Paragraph>
          </div>
          <div className="grid grid-cols-1 divide-x divide-y sm:grid-cols-2 md:grid-cols-1">
            {menuItems.map((item) => (
              <Space
                onClick={() => navigate(item.path)}
                className={`px-4 py-2  cursor-pointer  ${
                  location.pathname ===
                  `/${lang}/` +
                    paths[1] +
                    (item.path == "" ? "" : "/" + item.path)
                    ? "bg-main text-white"
                    : ""
                }`}
                key={item.path}
              >
                {item.icon}
                {item.title}
              </Space>
            ))}
          </div>
        </div>
        <div className="md:max-w-[800px] md:w-[800px] pb-[80px]">
          <Outlet />
        </div>
      </Container>
      <Footer className="hidden md:block" />
      <MobileMenuBar />
    </>
  );
}
const menuItems = [
  {
    path: "",
    title: "My Profile",
    icon: <FaRegUser />,
  },
  {
    path: "orders",
    title: "My Orders",
    icon: <IoBagOutline />,
  },

  {
    path: "wishlist",
    title: "Wishlist",
    icon: <FaRegHeart />,
  },
  {
    path: "recently-viewed",
    title: "Recently viewed",
    icon: <IoEyeOutline />,
  },
  {
    path: "reviews",
    title: "My reviews",
    icon: <FaRegStar />,
  },
  {
    path: "sign-out",
    title: "Sign out",
    icon: <BsDoorClosed />,
  },
];

export default MyProfile;
