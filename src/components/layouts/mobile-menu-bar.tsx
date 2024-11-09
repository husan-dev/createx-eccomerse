import { IoHomeOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import { Paragraph } from "../typography";
import { useNavigate } from "react-router-dom";

function MobileMenuBar() {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-0 z-50 w-full py-3 duration-300 bg-white border-t border-opacity-10 md:hidden">
      <div className="flex justify-around">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="flex flex-1 flex-col group items-center gap-2 cursor-pointer hover:!text-main"
          >
            {item.icon}
            <Paragraph className="!mb-0  font-semibold group-hover:!text-main ">
              {item.title}
            </Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobileMenuBar;
const menuItems = [
  {
    title: "home",
    path: "",
    icon: <IoHomeOutline />,
  },
  {
    title: "Search",
    path: "",
    icon: <BsSearch />,
  },
  {
    title: "wishlist",
    path: "ru/my-profile/wishlist",
    icon: <FaRegHeart />,
  },
  {
    title: "bag",
    path: "",
    icon: <PiShoppingCartLight />,
  },
  {
    title: "user",
    path: "ru/my-profile",
    icon: <FaRegUser />,
  },
];
