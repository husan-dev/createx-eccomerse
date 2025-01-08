import { Paragraph } from "@components/typography";
import productsStore from "@store/slices/products";
import { useQueryClient } from "@tanstack/react-query";
import { ProductMainCategory } from "@typess/products";
import {
  Collapse,
  CollapseProps,
  Empty,
  Input,
  InputNumber,
  Radio,
  Slider,
  Space,
} from "antd";
import clsx from "clsx";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoRemoveOutline, IoSearch } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

const FilterPanel = observer(() => {
  // console.log(
  //   toJS(productsStore.searchMaterialInput),
  //   productsStore.searchMaterialData[0]
  // );
  const queryClient = useQueryClient();
  const { i18n } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  const mainCategoryParams = params["main-category"];
  const categoryParams = params["category"];
  const humanCategoryParams = params["human-category"];
  const cacheCategories = queryClient.getQueryData<ProductMainCategory[]>([
    "categories",
    i18n.language,
  ]);
  const chosenCategory = cacheCategories?.find(
    (item) => item.slug === mainCategoryParams
  );
  console.log(
    cacheCategories,
    "cacheCategories",
    mainCategoryParams,
    "mainCategory"
  );
  console.log(toJS(productsStore.filterData), "filter data");
  const items: CollapseProps["items"] = useMemo(
    () => [
      {
        key: "1",
        label: <b>{chosenCategory?.name}</b>,
        children: (
          <>
            <Input
              suffix={<IoSearch />}
              className="w-full !rounded-sm mb-5"
              placeholder="Search Brand"
            />
            <Radio.Group
              value={categoryParams}
              onChange={(e) => {
                productsStore.setFilerData("material", e.target.value);
                productsStore.updateSelectedFilters("material", e.target.value);
                navigate(
                  `/${i18n.language}/${humanCategoryParams}/${mainCategoryParams}/${e.target.value}`
                );
              }}
              className="max-h-[180px] overflow-y-auto w-full"
            >
              <Space direction="vertical">
                {productsStore.searchMaterialInput.length !== 0 ? (
                  productsStore.searchMaterialData.map((item) => (
                    <Radio key={item.value} value={item.value}>
                      {item.title}
                    </Radio>
                  ))
                ) : productsStore.searchMaterialData.length === 0 ? (
                  <Empty className="w-full" />
                ) : (
                  chosenCategory?.subCategories.map((item) => (
                    <Radio key={item.slug} value={item.slug}>
                      {item.name}
                    </Radio>
                  ))
                )}
              </Space>
            </Radio.Group>
          </>
        ),
      },
      {
        key: "2",
        label: <b>Size</b>,
        children: (
          <Radio.Group
            value={productsStore.filterData.size || ""}
            onChange={(e) => {
              productsStore.setFilerData("size", e.target.value);
              productsStore.updateSelectedFilters("size", e.target.value);
            }}
          >
            <Space direction="vertical">
              {productsStore.sizes.map((item) => (
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
              {productsStore.colors.map((item) => (
                <div key={item.value} className="flex flex-col justiy-center">
                  <div
                    onClick={() => {
                      productsStore.setFilerData("color", item.value);
                      productsStore.updateSelectedFilters("color", item.value);
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
              defaultValue={productsStore.searchMaterialInput}
              onChange={(e) =>
                productsStore.setSearchMaterialInput(e.target.value)
              }
              placeholder="search material type"
              suffix={<IoSearch />}
              className="w-full !rounded-sm mb-5"
            />
            <Radio.Group
              value={productsStore.filterData.material || ""}
              onChange={(e) => {
                productsStore.setFilerData("material", e.target.value);
                productsStore.updateSelectedFilters("material", e.target.value);
              }}
              className="max-h-[180px] overflow-y-auto w-full"
            >
              <Space direction="vertical">
                {productsStore.searchMaterialInput.length !== 0 ? (
                  productsStore.searchMaterialData.map((item) => (
                    <Radio key={item.value} value={item.value}>
                      {item.title}
                    </Radio>
                  ))
                ) : productsStore.searchMaterialData.length === 0 ? (
                  <Empty className="w-full" />
                ) : (
                  productsStore.materials.map((item) => (
                    <Radio key={item.value} value={item.value}>
                      {item.title}
                    </Radio>
                  ))
                )}
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
              defaultValue={productsStore.searchBrandInput}
              onChange={(e) =>
                productsStore.setSearchBrandInput(e.target.value)
              }
              suffix={<IoSearch />}
              className="w-full !rounded-sm mb-5"
              placeholder="Search Brand"
            />
            {productsStore.filterBrands.length == 0 && (
              <Radio.Group
                value={productsStore.filterData.brand || ""}
                onChange={(e) => {
                  productsStore.setFilerData("brand", e.target.value);
                  productsStore.updateSelectedFilters("brand", e.target.value);
                }}
                className="max-h-[180px] overflow-y-auto w-full"
              >
                <Space direction="vertical">
                  {productsStore.searchBrandInput.length !== 0 ? (
                    productsStore.searchBrandData.map((item) => (
                      <Radio key={item.value} value={item.value}>
                        {item.title}
                      </Radio>
                    ))
                  ) : productsStore.searchBrandData.length === 0 ? (
                    <Empty className="w-full" />
                  ) : (
                    productsStore.brands.map((item) => (
                      <Radio key={item.value} value={item.value}>
                        {item.title}
                      </Radio>
                    ))
                  )}
                </Space>
              </Radio.Group>
            )}
          </>
        ),
      },
      {
        key: "6",
        label: <b>Price</b>,
        children: (
          <>
            <Slider
              value={
                productsStore.filterData.price
                  ? productsStore.filterData.price
                  : [0, 1000]
              }
              min={0}
              max={1000}
              onChange={(value) =>
                productsStore.setFilerData("price", value as [number, number])
              }
              className="mt-8"
              range
              defaultValue={[20, 50]}
            />
            <div className="flex items-center justify-between mt-5 ">
              <InputNumber
                value={
                  productsStore.filterData.price
                    ? productsStore.filterData.price[0]
                    : 0
                }
                size="large"
                className="rounded-sm w-[40%]"
              />
              <IoRemoveOutline />
              <InputNumber
                value={
                  productsStore.filterData.price
                    ? productsStore.filterData.price[1]
                    : 1000
                }
                size="large"
                className="rounded-sm w-[40%]"
              />
            </div>
          </>
        ),
      },
    ],
    [
      productsStore.filterData.brand,
      productsStore.filterData.size,
      productsStore.filterData.color,
      productsStore.filterData.material,
      productsStore.filterData.price,
      productsStore.searchMaterialInput,
      productsStore.searchBrandInput,
      mainCategoryParams,
      cacheCategories,
      categoryParams,
    ]
  );
  return (
    <div
      className={`col-span-1 lg:pe-5 ${clsx({
        hidden: productsStore.hideFilter,
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
  );
});

export default FilterPanel;
