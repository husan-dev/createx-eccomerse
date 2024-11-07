import Card from "@components/products-card";

function ProductList() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
        <Card key={item} />
      ))}
    </>
  );
}

export default ProductList;
