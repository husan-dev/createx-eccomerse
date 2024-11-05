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
import Container from "@components/container";
import { IoSearch } from "react-icons/io5";
import Subscribe from "@components/layouts/subscribe";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useMemo, useState } from "react";
import clsx from "clsx";
import { CiFilter } from "react-icons/ci";
import Card from "@components/products-card";
import { useForm } from "antd/es/form/Form";
import { IoRemoveOutline } from "react-icons/io5";
import BreadcrumbContainer from "@components/breadcrumb-container";
import { Paragraph } from "@components/typography";
import productStore from "@store/slices/products";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
function Products() {
  const [hideFilter, setHideFilter] = useState(false);
  const [form] = useForm();

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
              {productStore.sizes.map((item) => (
                <Radio key={item.value} value={item.value}>
                  {item.title}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        ),
      },
      {
        key: "3",
        label: <b>Color</b>,
        children: (
          <div className="grid grid-cols-4 gap-3 max-h-[180px] overflow-y-auto pe-5">
            {productStore.colors.map((item) => (
              <div className="flex flex-col justiy-center">
                <div
                  key={item.value}
                  className="flex items-center justify-center w-full p-1 border rounded-full cursor-pointer aspect-square"
                >
                  <span
                    className={`p-3 w-full aspect-square rounded-full border`}
                    style={{ backgroundColor: item.color }}
                  ></span>
                </div>
                <Paragraph className="!m-0 text-center text-xs">
                  {item.title}
                </Paragraph>
              </div>
            ))}
          </div>
        ),
      },
      {
        key: "4",
        label: <b>Material</b>,
        children: (
          <>
            <Input
              placeholder="search materail type "
              suffix={<IoSearch />}
              className="w-full !rounded-sm mb-5"
            />
            <Radio.Group className="max-h-[180px] overflow-y-auto w-full">
              <Space direction="vertical">
                {productStore.materials.map((item) => (
                  <Radio key={item.value} value={item.value}>
                    {item.title}
                  </Radio>
                ))}
              </Space>
            </Radio.Group>
          </>
        ),
      },
      {
        key: "5",
        label: <b>Brand</b>,
        children: (
          <>
            <Input
              suffix={<IoSearch />}
              className="w-full !rounded-sm mb-5"
              placeholder="Search Brand"
            />
            <Radio.Group className="max-h-[180px] overflow-y-auto w-full">
              <Space direction="vertical">
                {productStore.brands.map((item) => (
                  <Radio key={item.value} value={item.value}>
                    {item.title}
                  </Radio>
                ))}
              </Space>
            </Radio.Group>
          </>
        ),
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
      <BreadcrumbContainer />
      <Container className="py-6 ">
        <div className="grid grid-cols-4 gap-4 md:gap-5 lg:gap-6 ">
          <div className="lg:pe-5">
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

        <div className="relative grid grid-cols-1 gap-4 md:gap-5 lg:gap-6 md:grid-cols-3 lg:grid-cols-4">
          <div
            className={`md:!sticky md:top-0 col-span-1 lg:pe-5 ${clsx({
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
            className={`gap-5 lg:gap-6 ${
              hideFilter
                ? "col-span-4  grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 "
                : "md:col-span-2 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3"
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
