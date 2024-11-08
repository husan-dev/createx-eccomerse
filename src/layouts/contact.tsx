import Container from "@components/container";
import { Title } from "@components/typography";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation("", { keyPrefix: "contact" });
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 my-[60px]">
      <div className="col-span-5 ">
        {pages.map((item) => (
          <Title
            className={`!text-[30px] !mb-5 !mt-0  cursor-pointer ${
              location.pathname.includes(item.path) ? "!text-main" : ""
            }`}
            onClick={() => navigate(item.path)}
            key={item.path}
          >
            {t(item.path + ".title")}
          </Title>
        ))}
      </div>
      <div className="col-span-7">
        <Outlet />
      </div>
    </Container>
  );
}

export default Contact;

const pages = [
  { title: "Contact Us", path: "contact-us" },
  { title: "Outlet Stores", path: "outlet-stores" },
  { title: "FAQ", path: "faq" },
];
