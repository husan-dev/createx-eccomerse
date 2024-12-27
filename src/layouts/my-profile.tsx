import { message, Popconfirm, PopconfirmProps, Space } from "antd";
import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoEyeOutline, IoBagOutline } from "react-icons/io5";
import { BsDoorClosed } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa6";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "@components/layouts/header";
import Footer from "@components/layouts/footer";
import MobileMenuBar from "@components/layouts/mobile-menu-bar";
import { GoQuestion } from "react-icons/go";
import { observer } from "mobx-react-lite";
import userStore from "@store/slices/user";
import { useTranslation } from "react-i18next";
const MyProfile = observer(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const paths = location.pathname.split("/").slice(1);

  const confirm: PopconfirmProps["onConfirm"] = () => {
    localStorage.removeItem("token");
    userStore.deleteUser();
    navigate(`/${i18n.language}/`);
    message.success("Click on Yes");
  };
  const cancel: PopconfirmProps["onCancel"] = () => {
    message.error("Click on No");
  };
  return (
    <>
      <Header className="hidden md:block" />
      <Container className="py-[30px] md:py-[50px] pb-[70px] mb-[70px] gap-5 sm:gap-10 md:gap-10 flex flex-col md:flex-row h-screen md:h-auto md:justify-between">
        <div className="flex flex-col border self-start divide-y rounded-md  w-full min-w-[200px]  md:w-[250px]">
          <div className="p-4">
            <Title level={4} className="!mb-1">
              {userStore.user?.firstName} {userStore.user?.lastName}
            </Title>
            <Paragraph className="!m-0">{userStore.user?.email}</Paragraph>
          </div>
          <div className="grid grid-cols-1 divide-x divide-y sm:grid-cols-2 md:grid-cols-1">
            {menuItems.map((item) => (
              <Space
                onClick={() => navigate(item.path)}
                className={`px-4 py-2  cursor-pointer  ${
                  location.pathname ===
                  `/${i18n.language}/` +
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
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              icon={<GoQuestion className="mr-1 text-red-500 translate-y-1" />}
              cancelText="No"
            >
              <Space onClick={() => {}} className="px-4 py-2 cursor-pointer">
                <BsDoorClosed /> {"Sign Out"}
              </Space>
            </Popconfirm>
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
});
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
];

export default MyProfile;
