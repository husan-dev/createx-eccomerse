import Container from "../../components/container";
import brandLogo1 from "../../../public/images/landing/pertners/brand-logo.svg";
import brandLogo2 from "../../../public/images/landing/pertners/brand-logo-1.svg";
import brandLogo3 from "../../../public/images/landing/pertners/brand-logo-2.svg";
import brandLogo4 from "../../../public/images/landing/pertners/brand-logo-3.svg";
import brandLogo5 from "../../../public/images/landing/pertners/brand-logo-4.svg";
import brandLogo6 from "../../../public/images/landing/pertners/brand-logo-5.svg";

function Partners() {
  return (
    <Container className="flex justify-between py-6 my-[120px]">
      {images.map((item, index) => (
        <img key={index} src={item} alt="" />
      ))}
    </Container>
  );
}

export default Partners;

const images = [
  brandLogo1,
  brandLogo2,
  brandLogo3,
  brandLogo4,
  brandLogo5,
  brandLogo6,
];
