import BreadcrumbContainer from "@components/breadcrumb-container";
import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import AdditionalInformation from "@pages/checkout/additional-information";
import Info from "@pages/checkout/info";
import PaymentMethod from "@pages/checkout/payment-method";
import ShippingAdress from "@pages/checkout/shipping-and-adress";
import ShippingMethod from "@pages/checkout/shipping-method";
import { Divider } from "antd";
function Checkout() {
  return (
    <>
      <BreadcrumbContainer />
      <Container className="flex flex-col md:gap-5 lg:flex-row justify-between py-[50px] px-5 ">
        <div className="lg:w-[60%] w-[100%]">
          <div className="flex justify-between">
            <Title>Checkout</Title>
            <Paragraph className="!mb-0">Back to shopping</Paragraph>
          </div>
          <Divider />

          {/* 1 */}
          <Title className="!text-[20px]">1. Item Review</Title>

          {/* 2 */}
          <ShippingAdress />

          {/* 3 */}
          <ShippingMethod />

          {/* 4 */}
          <PaymentMethod />

          {/* 5 */}
          <AdditionalInformation />
        </div>
        <Info className="w-[100%] sticky  lg:max-w-[350px]" />
      </Container>
    </>
  );
}

export default Checkout;
