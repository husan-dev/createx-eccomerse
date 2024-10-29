import { Space } from "antd";
import Container from "../components/container";
import { FaRegUser } from "react-icons/fa";
import { Paragraph, Title } from "../components/typography";
import { IoBagOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { BsDoorClosed } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa6";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function MyProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const paths = location.pathname.slice(1).split("/");
  return (
    <Container className="py-[50px] flex justify-between">
      <div className="flex flex-col flex-grow-0  rounded-md border-b-0 w-[250px]">
        <div className="p-4 border-t border-b border-x">
          <Title level={4} className="!mb-1">
            Annete Pikle
          </Title>
          <Paragraph className="!m-0">example@gmail.com</Paragraph>
        </div>
        {menuItems.map((item) => (
          <Space
            onClick={() => navigate(item.path)}
            className={`px-4 py-2 border-b border-x cursor-pointer  ${
              location.pathname ===
              "/" + paths[1] + (item.path == "" ? "" : "/" + item.path)
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
      <div className="max-w-[800px] w-[800px]">
        <Outlet />
      </div>
    </Container>
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
