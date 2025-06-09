import { IProduct } from "../types/product-types";
import { NetworkError, DataError } from "../utils/errorHandler";

export async function fetchProducts(): Promise<IProduct[]> {
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) {
    throw new NetworkError(`Connection error`);
  }

  const data = await response.json();

  if (!data.products || !Array.isArray(data.products)) {
    throw new DataError("Bad response data");
  }

  return data.products;
}
