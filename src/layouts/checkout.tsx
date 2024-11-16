import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import AdditionalInformation from "@pages/checkout/additional-information";
import ShippingAdress from "@pages/checkout/shipping-and-adress";
import { Divider } from "antd";
function Checkout() {
  return (
    <Container className="flex gap-32 py-[50px]">
      <div>
        <div className="flex justify-between">
          <Title>Checkout</Title>
          <Paragraph className="!mb-0">Back to shopping</Paragraph>
        </div>
        <Divider />
        <Title className="!text-[20px]">1. Item Review</Title>
        <ShippingAdress />
        <AdditionalInformation />
      </div>
      <div></div>
    </Container>
  );
}

export default Checkout;
