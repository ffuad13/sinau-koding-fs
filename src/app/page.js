"use client";

import ProductList from "@/components/ProductList";
import ComplexForm from "@/components/ComplexForm";
import { useState, useEffect, useMemo, useCallback } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  const lalalala = "sbsbbsbsbsb"

  const fetchProducts = useCallback(async () => {
    const res = await fetch('http://localhost:3030/products');
    const data = await res.json();
    setProducts(data);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const memoizedProduct = useMemo(() => products, [products])
  const handleUpdateProducts = async () => {
    const updatedProducts = products.map(product => ({
      ...product,
      price: product.price +1
    }))

    setProducts(updatedProducts)
  }

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Product Catalog</h1> */}
      <h1>Product Catalog</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded mb-4" onClick={handleUpdateProducts}>
        Update Product
      </button>
      <ProductList products={memoizedProduct} />
      {/* <ProductList products={products} /> */}

      <h2 className="text-xl font-bold mt-8 mb-4">Complex Form</h2>
      <ComplexForm />
    </div>
  );
}