import BreadcrumbContainer from "@components/breadcrumb-container";
import Container from "@components/container";
import FilterPanel from "@pages/products/filter-panel";
import ProductList from "@pages/products/product-list";
import productsStore from "@store/slices/products";
import { useQueryClient } from "@tanstack/react-query";
import { Product } from "@typess/products";
import { Button, Empty, Form, InputNumber, Select, Space } from "antd";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useCallback } from "react";
import { CiFilter } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useParams } from "react-router-dom";

const ProductsClean: React.FC = observer(() => {
  const queryClient = useQueryClient();
  const params = useParams();
  const mainCategory = params["main-category"] || "";
  const humanCategory = params["human-category"] || "";
  const category = params["category"];
  const handleSort = useCallback(
    (value: string) => {
      productsStore.setSortData(value);
    },
    [productsStore.sortData]
  );
  const products = toJS(
    queryClient.getQueryData<Product[]>([
      "products",
      mainCategory,
      humanCategory,
      category ? category : "",
      toJS(productsStore.sortData),
      toJS(productsStore.pagination),
      toJS(productsStore.filterData),
    ])
  );
  console.log(
    products,
    "products",
    toJS([
      "products",
      mainCategory,
      humanCategory,
      category,
      toJS(productsStore.sortData),
      toJS(productsStore.pagination),
      toJS(productsStore.filterData),
    ])
  );
  return (
    <>
      <BreadcrumbContainer className="flex justify-between">
        <ObserverFilterButton className="hidden md:flex" />
      </BreadcrumbContainer>
      <Container className="py-6">
        <div className="grid flex-col-reverse grid-cols-2 gap-4 md:grid-cols-4 md:gap-5 lg:gap-6 ">
          <div className="lg:pe-5">
            <Button
              size="large"
              icon={<CiFilter />}
              onClick={() => productsStore.toggleHideFilter()}
              className="w-full md:mb-7  hover:!bg-teal-900 !text-white rounded-md bg-main"
            >
              {!productsStore.hideFilter ? "Hide Filter" : "Show Filter"}
            </Button>
          </div>
          <Form
            colon={false}
            size="large"
            className="flex-row-reverse justify-between col-span-2 md:flex-row md:justify-end md:col-span-3 mb-7 md:mb-0"
            layout="inline"
          >
            <Form.Item label="Sort by" className="">
              <Select
                onChange={handleSort}
                value={productsStore.getSortData()}
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
              <InputNumber
                onChange={(value) =>
                  productsStore.setPagination("pageSize", value ? value : 12)
                }
                value={productsStore.pagination.pageSize}
                min={9}
                max={100}
                className="rounded-md"
              />
            </Form.Item>
          </Form>
        </div>

        <div className="relative grid grid-cols-1 gap-4 md:gap-5 lg:gap-6 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <FilterPanel />
            <ObserverFilterButton className="md:hidden" />
          </div>
          {products && products.length === 0 && (
            <div className="h-full grid-cols-1 lg:grid-cols-3 place-items-center">
              <Empty />
            </div>
          )}
          <ProductList />
        </div>
      </Container>
    </>
  );
});

export default ProductsClean;

function FilterButtons({ className }: { className: string }) {
  return (
    <Space className={className}>
      {productsStore.selectedFilters.map(
        (item) =>
          item.value && (
            <Button
              key={item.key}
              onClick={() => {
                productsStore.setFilerData(item.key, null);
                productsStore.deleteSelectedFilter(item.key);
              }}
              size="small"
              type="text"
              icon={<IoMdClose />}
              className=""
            >
              {item.value}
            </Button>
          )
      )}
      {productsStore.selectedFilters.length > 1 && (
        <Button
          size="small"
          type="text"
          onClick={() => {
            productsStore.resetFilterData();
            productsStore.resetSelectedFilter();
          }}
          icon={<IoMdClose />}
        >
          close All
        </Button>
      )}
    </Space>
  );
}

const ObserverFilterButton = observer(FilterButtons);
