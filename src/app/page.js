"use client";

import ProductList from "@/components/ProductList";
import ComplexForm from "@/components/ComplexForm";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('http://localhost:3030/products');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Catalog</h1>
      <ProductList products={products} />

      <h2 className="text-xl font-bold mt-8 mb-4">Complex Form</h2>
      <ComplexForm />
    </div>
  );
}