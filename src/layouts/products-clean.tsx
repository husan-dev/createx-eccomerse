import BreadcrumbContainer from "@components/breadcrumb-container";
import Container from "@components/container";
import FilterPanel from "@pages/products/filter-panel";
import ProductList from "@pages/products/product-list";
import productsStore from "@store/slices/products";
import { Button, Form, InputNumber, Select, Space } from "antd";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { CiFilter } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const ProductsClean = observer(() => {
  console.log(
    toJS(productsStore.selectedFilters),
    toJS(productsStore.filterData),
    "asasa"
  );
  return (
    <>
      <BreadcrumbContainer className="flex justify-between">
        <Space>
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
          <FilterPanel />
          <div
            className={`gap-5 lg:gap-6 ${
              productsStore.hideFilter
                ? "col-span-4  grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 "
                : "md:col-span-2 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            <ProductList />
          </div>
        </div>
      </Container>
    </>
  );
});

export default ProductsClean;
