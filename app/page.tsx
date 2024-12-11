"use client";

import React, { useState, useEffect } from "react";
import { Product } from "../types/product";
import ShoppingCart from "@/components/shoppingCard";
import Categories from "@/components/categories";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/product");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="px-4 sm:px-12">
      <Categories />
      <h1 className="text-[32px] font-bold text-center sm:text-left pb-[24px]">Бургеры</h1>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-[30px]">
        <ShoppingCart />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px] w-full">
          {products.map((product) => (
            <div
              key={product.id}
              className="border relative w-full sm:w-72 md:w-80 h-[auto] p-2 bg-white rounded-lg shadow-md hover:scale-105 hover:shadow-[0_4px_15px_-5px_rgba(255,165,0,0.8)] transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[200px] object-cover rounded-md mb-4"
              />
              <p className="text-gray-600">
                {product.price} <span className="text-sm">₽</span>
              </p>
              <h2 className="text-lg font-semibold pb-[29px]">{product.name}</h2>
              <p className="text-gray-600">{product.kilogram}</p>
              <button className="text-[16px] text-black font-normal bg-[#F2F2F3] w-full py-2 rounded-lg hover:bg-orange-300 focus:bg-orange-500 focus:text-white duration-300 transition-transform">
                Добавить
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
