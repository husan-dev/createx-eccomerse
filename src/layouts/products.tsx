import {
  Button,
  Collapse,
  CollapseProps,
  Form,
  Input,
  InputNumber,
  Pagination,
  Radio,
  Select,
  Slider,
  Space,
} from "antd";
import { IoMdClose } from "react-icons/io";
import Container from "@components/container";
import { IoSearch } from "react-icons/io5";
import Subscribe from "@components/layouts/subscribe";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useCallback, useMemo, useReducer, useState } from "react";
import clsx from "clsx";
import { CiFilter } from "react-icons/ci";
import Card from "@components/products-card";
import { useForm } from "antd/es/form/Form";
import { IoRemoveOutline } from "react-icons/io5";
import BreadcrumbContainer from "@components/breadcrumb-container";
import { Paragraph } from "@components/typography";
import productStore from "@store/slices/products";
import {
  Action,
  dispatchAction,
  ISelectedFilter,
  State,
} from "@typess/products";

const initialState: State = {
  price: null,
  brand: null,
  color: null,
  material: null,
  size: null,
};
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_SIZE":
      return { ...state, size: action.payload };
    case "SET_BRAND":
      return { ...state, brand: action.payload };
    case "SET_PRICE":
      return { ...state, price: action.payload };
    case "SET_COLOR":
      return { ...state, color: action.payload };
    case "SET_MATERIAL":
      return { ...state, material: action.payload };
    default:
      return state;
  }
};

function Products() {
  const [hideFilter, setHideFilter] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedFilter, setSelectedFilter] = useState<ISelectedFilter[]>([]);

  const updateSelectedFilter = useCallback(
    (actionType, key, value) => {
      const isTrue = selectedFilter.some(
        (item) => item.actionType === actionType
      );
      const newSelectedFilter: ISelectedFilter[] = isTrue
        ? selectedFilter.map((item) => {
            if (item.actionType === actionType) {
              return { ...item, payload: value };
            }
            return item;
          })
        : [
            ...selectedFilter,
            {
              key,
              actionType,
              payload: value,
            },
          ];
      setSelectedFilter(newSelectedFilter);
    },
    [selectedFilter]
  );
  const [form] = useForm();
  console.log(state, "this state");
  const items: CollapseProps["items"] = useMemo(
    () => [
      {
        key: "1",
        label: <b>Clothes</b>,
        children: <div>{""}</div>,
      },
      {
        key: "2",
        label: <b>Size</b>,
        children: (
          <Radio.Group
            value={state.size}
            onChange={(e) => {
              dispatch({ type: "SET_SIZE", payload: e.target.value });
              updateSelectedFilter("SET_SIZE", "size", e.target.value);
            }}
          >
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
          <div className="max-h-[180px] overflow-y-auto pe-5">
            <div className="grid grid-cols-4 gap-5 sm:grid-cols-6 md:grid-cols-3 xl:grid-cols-4">
              {productStore.colors.map((item) => (
                <div className="flex flex-col justiy-center">
                  <div
                    onClick={() => {
                      dispatch({ type: "SET_COLOR", payload: item.value });
                      updateSelectedFilter("SET_COLOR", "color", item.value);
                    }}
                    key={item.value}
                    className="flex items-center justify-center w-full p-1 border rounded-full cursor-pointer hover:scale-105 aspect-square"
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
            <Radio.Group
              value={state.material}
              onChange={(e) => {
                dispatch({ type: "SET_MATERIAL", payload: e.target.value });
                updateSelectedFilter(
                  "SET_MATERIAL",
                  "material",
                  e.target.value
                );
              }}
              className="max-h-[180px] overflow-y-auto w-full"
            >
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
            <Radio.Group
              value={state.brand}
              onChange={(e) => {
                dispatch({ type: "SET_BRAND", payload: e.target.value });
                updateSelectedFilter("SET_BRAND", "brand", e.target.value);
              }}
              className="max-h-[180px] overflow-y-auto w-full"
            >
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
            <Slider
              value={state.price ? state.price : [0, 1000]}
              min={0}
              max={1000}
              onChange={(value) =>
                dispatch({
                  type: "SET_PRICE",
                  payload: value as [number, number],
                })
              }
              className="mt-8"
              range
              defaultValue={[20, 50]}
            />
            <div className="flex items-center justify-between mt-5 ">
              <InputNumber
                value={state.price ? state.price[0] : 0}
                size="large"
                className="rounded-sm w-[40%]"
              />
              <IoRemoveOutline />
              <InputNumber
                value={state.price ? state.price[1] : 1000}
                size="large"
                className="rounded-sm w-[40%]"
              />
            </div>
          </>
        ),
      },
    ],
    [state]
  );
  return (
    <>
      <BreadcrumbContainer className="flex justify-between">
        <Space>
          {selectedFilter.map(
            (item) =>
              item.payload && (
                <Button
                  key={item.key}
                  onClick={() => {
                    console.log(item, "Asdasas");
                    dispatch(dispatchAction(item.actionType, null));
                    setSelectedFilter((prev) =>
                      prev.filter((filterItem) => filterItem.key !== item.key)
                    );
                  }}
                  size="small"
                  type="text"
                  icon={<IoMdClose />}
                  className=""
                >
                  {item.payload}
                </Button>
              )
          )}
          {selectedFilter.length > 1 && (
            <Button
              size="small"
              type="text"
              onClick={() => {
                selectedFilter.forEach((item) =>
                  dispatch(dispatchAction(item.actionType, null))
                );
                setSelectedFilter([]);
              }}
              icon={<IoMdClose />}
            >
              close All
            </Button>
          )}
        </Space>
      </BreadcrumbContainer>
      <Container className="py-6 ">
        <div className="grid flex-col-reverse grid-cols-2 gap-4 md:grid-cols-4 md:gap-5 lg:gap-6 ">
          <div className="lg:pe-5">
            <Button
              size="large"
              icon={<CiFilter />}
              onClick={() => setHideFilter(!hideFilter)}
              className="w-full md:mb-7  hover:!bg-teal-900 !text-white rounded-md bg-main"
            >
              {!hideFilter ? "Hide Filter" : "Show Filter"}
            </Button>
          </div>
          <Form
            colon={false}
            size="large"
            className="flex-row-reverse justify-between col-span-2 md:flex-row md:justify-end md:col-span-3 mb-7 md:mb-0"
            form={form}
            layout="inline"
          >
            <Form.Item label="Sort by" className="">
              <Select
                defaultValue={"name-asc"}
                className="!rounded-md"
                options={[
                  { label: "name asc", value: "name-asc" },
                  { label: "name desc", value: "name-desc" },
                  { label: "price asc", value: "price-asc" },
                  { label: "price desc", value: "price-desc" },
                ]}
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
