import { Paragraph, Title } from "@components/typography";
import { Radio } from "antd";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

function ShippingMethod() {
  const { t, i18n } = useTranslation("", { keyPrefix: "checkout.3" });
  const radioItems = useMemo(
    () => [
      {
        value: "courierToYourAddress",
        label: t("radioGroup.courierToYourAddress.label"),
        placeholder: t("radioGroup.courierToYourAddress.placeholder"),
      },
      {
        value: "pickUpFromStore",
        label: t("radioGroup.pickUpFromStore.label"),
        placeholder: t("radioGroup.pickUpFromStore.placeholder"),
      },
      {
        value: "upsGroundShipping",
        label: t("radioGroup.upsGroundShipping.label"),
        placeholder: t("radioGroup.upsGroundShipping.placeholder"),
      },
      {
        value: "pickUpAtCreatexLocker",
        label: t("radioGroup.pickUpAtCreatexLocker.label"),
        placeholder: t("radioGroup.pickUpAtCreatexLocker.placeholder"),
      },
      {
        value: "createxGlobalExport",
        label: t("radioGroup.pickUpFromStore.label"),
        placeholder: t("radioGroup.createxGlobalExport.placeholder"),
      },
    ],
    [i18n.language]
  );
  return (
    <div>
      <Title className="!text-[20px]">3. {t("title")}</Title>
      <Radio.Group>
        {radioItems.map((item) => (
          <div key={item.value} className="flex justify-between">
            <Radio value={item.value} className="items-start ">
              <div className="flex flex-col">
                <Title className="!text-sm">{item.label}</Title>
                <Paragraph>{item.placeholder}</Paragraph>
              </div>
            </Radio>
          </div>
        ))}
      </Radio.Group>
    </div>
  );
}

export default ShippingMethod;
