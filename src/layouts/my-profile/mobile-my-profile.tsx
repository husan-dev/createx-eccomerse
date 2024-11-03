import { BsDoorClosed } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa6";
import { IoBagOutline, IoEyeOutline } from "react-icons/io5";

function MobileMyProfile() {
  return (
    <div>
      {menuItems.map((item) => (
        <div>
          {item.icon} {item.title}
        </div>
      ))}
    </div>
  );
}

export default MobileMyProfile;
const menuItems = [
  {
    path: "orders",
    title: "My Orders",
    icon: <IoBagOutline />,
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
