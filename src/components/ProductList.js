import ProductItem from "./ProductItem";

function ProductList({ products }) {
  // console.log("ProductList rendered"); // For tracking re-renders

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;