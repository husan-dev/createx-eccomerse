import { getProducts } from "@api/products";
import Card from "@components/products-card";
import productsStore from "@store/slices/products";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@typess/products";
import { observer } from "mobx-react-lite";
const ProductList = observer(() => {
  const { data, isLoading, isError } = useQuery<Product[]>({
    queryKey: [
      "products",
      productsStore.sortData,
      productsStore.pagination,
      productsStore.filterData,
    ],
    queryFn: () => getProducts(),
  });
  if (isLoading)
    return (
      <ProductsContainer>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 select-none animate-pulse"
          >
            <div className="w-full aspect-[3/3.5]  bg-gray-300"></div>
            <ul className="flex flex-col gap-2">
              <li className="w-full h-4 bg-gray-300 "></li>
              <li className="w-[75%] h-4 bg-gray-300"></li>
            </ul>
          </div>
        ))}
      </ProductsContainer>
    );
  if (isError) return <div>Error</div>;
  return (
    <>
      <ProductsContainer>
        {data &&
          data.map((item: Product) => <Card key={item.order} item={item} />)}
      </ProductsContainer>
    </>
  );
});
export default ProductList;
const ProductsContainer = observer(
  ({ children }: { children: React.ReactNode }) => {
    return (
      <div
        className={`gap-5 lg:gap-6 ${
          productsStore.hideFilter
            ? "col-span-4  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 "
            : "md:col-span-2 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {children}
      </div>
    );
  }
);
