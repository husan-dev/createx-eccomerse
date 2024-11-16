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
      <Container className="grid grid-cols-1 md:grid-cols-12 gap-32 py-[50px]  checkout-page">
        <div className=" md:col-span-7">
          <div className="flex justify-between">
            <Title>Checkout</Title>
            <Paragraph className="!mb-0">Back to shopping</Paragraph>
          </div>
          <Divider />
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
        <Info className="md:col-span-5" />
      </Container>
    </>
  );
}

export default Checkout;
