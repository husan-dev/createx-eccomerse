import {
  Button,
  Collapse,
  CollapseProps,
  Form,
  Input,
  InputNumber,
  Pagination,
  Radio,
  Slider,
  Space,
} from "antd";
import Container from "../components/container";
import Subscribe from "../components/layouts/subscribe";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useMemo, useState } from "react";
import clsx from "clsx";
import { CiFilter } from "react-icons/ci";
import Card from "../components/products-card";
import { useForm } from "antd/es/form/Form";
import { IoRemoveOutline } from "react-icons/io5";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
function Products() {
  const [hideFilter, setHideFilter] = useState(false);
  const [form] = useForm();
  const [selectedColor, setSelectedColor] = useState(null);
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FFC300", "#8E44AD"]; // Tanlov uchun ranglar

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const items: CollapseProps["items"] = useMemo(
    () => [
      {
        key: "1",
        label: <b>Clothes</b>,
        children: <div>{text}</div>,
      },
      {
        key: "2",
        label: <b>Size</b>,
        children: (
          <Radio.Group>
            <Space direction="vertical">
              <Radio value={1}>XS</Radio>
              <Radio value={2}>S</Radio>
              <Radio value={3}>M</Radio>
              <Radio value={4}>L</Radio>
              <Radio value={5}>XL</Radio>
              <Radio value={6}>Plus Size</Radio>
            </Space>
          </Radio.Group>
        ),
      },
      {
        key: "3",
        label: <b>Color</b>,
        children: (
          <Radio.Group onChange={handleColorChange} value={selectedColor}>
            {colors.map((color) => (
              <Radio
                key={color}
                value={color}
                style={{
                  backgroundColor: color,
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  display: "inline-block",
                  margin: "0 8px",
                  border:
                    selectedColor === color
                      ? "2px solid black"
                      : "1px solid #ccc",
                }}
              />
            ))}
          </Radio.Group>
        ),
      },
      {
        key: "4",
        label: <b>Material</b>,
        children: (
          <Radio.Group>
            <Space direction="vertical">
              <Radio value={1}> Cotton</Radio>
              <Radio value={2}>Synthetics</Radio>
              <Radio value={3}>Nappa leather</Radio>
              <Radio value={4}>Leather</Radio>
              <Radio value={5}>Cashmere</Radio>
              <Radio value={6}>Denim</Radio>
            </Space>
          </Radio.Group>
        ),
      },
      {
        key: "5",
        label: <b>Brand</b>,
        children: <div>{text}</div>,
      },
      {
        key: "6",
        label: <b>Price</b>,
        children: (
          <>
            <Slider className="mt-8" range defaultValue={[20, 50]} />
            <div className="flex items-center justify-between mt-5 ">
              <InputNumber size="large" className="rounded-sm w-[40%]" />
              <IoRemoveOutline />
              <InputNumber size="large" className="rounded-sm w-[40%]" />
            </div>
          </>
        ),
      },
    ],
    []
  );
  return (
    <>
      <Container className="py-6 ">
        <div className="grid grid-cols-4 gap-6 ">
          <div className="pe-5">
            <Button
              size="large"
              icon={<CiFilter />}
              onClick={() => setHideFilter(!hideFilter)}
              className="w-full mb-7  hover:!bg-teal-900 !text-white rounded-md bg-main"
            >
              {!hideFilter ? "Hide Filter" : "Show Filter"}
            </Button>
          </div>
          <Form
            colon={false}
            size="large"
            className="justify-end col-span-3"
            form={form}
            layout="inline"
          >
            <Form.Item label="Sort by">
              <Input
                className="
              !rounded-md"
              />
            </Form.Item>
            <Form.Item label="Show" className="">
              <InputNumber min={9} max={100} className="rounded-md" />
            </Form.Item>
          </Form>
        </div>

        <div className="relative grid grid-cols-4 gap-6">
          <div
            className={`!sticky top-0 col-span-1 pe-5 ${clsx({
              hidden: hideFilter,
            })}`}
          >
            <Collapse
              className="rounded-md"
              defaultActiveKey={["1"]}
              expandIconPosition={"end"}
              bordered={false}
              ghost={true}
              expandIcon={({ isActive }) =>
                isActive ? (
                  <FaMinus className="!text-main !text-lg" />
                ) : (
                  <FaPlus className="!text-main  !text-lg" />
                )
              }
              items={items}
            />
          </div>
          <div
            className={` gap-6 ${
              hideFilter
                ? "col-span-4 grid grid-cols-4 "
                : "col-span-3 grid grid-cols-3"
            }`}
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Pagination
          align="center"
          defaultPageSize={4}
          defaultCurrent={5}
          current={100}
        />
      </Container>
      <Subscribe />
    </>
  );
}

export default Products;
