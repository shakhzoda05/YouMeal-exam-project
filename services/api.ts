import { Product } from "../types/product";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("http://localhost:5000/product");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};
