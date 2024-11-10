import { useLocation, useNavigate } from "react-router-dom";
import { Paragraph } from "./typography";
import { FaAngleRight } from "react-icons/fa";

function Breadcrumb() {
  const location = useLocation();
  const navigate = useNavigate();
  const paths = location.pathname.split("/").slice(1);
  const items = paths.map((item, index, arr) => {
    return { title: item, href: `/${arr.slice(0, index + 1).join("/")}` };
  });

  console.log(paths, "breadCrumbsss", items);
  return (
    <div className="flex items-center">
      {items.map((item, index) => {
        return (
          <div key={index}>
            {index !== 0 && (
              <Paragraph className="!m-0 inline-block text-black">
                <FaAngleRight className="mt-1" />
              </Paragraph>
            )}
            <Paragraph
              className={`!m-0  !inline-block  !px-1 cursor-pointer hover:bg-main hover:bg-opacity-10 ${
                location.pathname === item.href
                  ? "!text-gray-600 opacity-50"
                  : "!text-black"
              }`}
              onClick={() => navigate(item.href)}
            >
              {item.title}
            </Paragraph>
          </div>
        );
      })}
    </div>
  );
}

export default Breadcrumb;
