import { fetchProducts } from "./services/apiService";
import Product from "./models/Product";

async function getProducts() {
  try {
    const productData = await fetchProducts();

    productData.forEach((item) => {
      const product = new Product(item);
      product.displayDetails();
      console.log(
        `Price with discount: $${product.getPriceWithDiscount().toFixed(2)}\n`
      );
    });
  } catch (error) {
    console.log(error);
  }
}

getProducts();
