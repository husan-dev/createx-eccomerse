import BreadcrumbContainer from "@components/breadcrumb-container";
import Container from "@components/container";
import { Title } from "@components/typography";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation("", { keyPrefix: "contact" });
  return (
    <>
      <BreadcrumbContainer />
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 my-[60px]">
        <div className="col-span-5 ">
          {pages.map((item) => (
            <Title
              className={`!text-[25px] sm:!text-[28px] md:!text-[30px]  sm:!mb-5 !mt-0  cursor-pointer ${
                location.pathname.includes(item) ? "!text-main" : ""
              }`}
              onClick={() => navigate(item)}
              key={item}
            >
              {t(item + ".title")}
            </Title>
          ))}
        </div>
        <div className="col-span-7">
          <Outlet />
        </div>
      </Container>
    </>
  );
}

export default Contact;

const pages = ["contact-us", "outlet-stores", "faq"];
