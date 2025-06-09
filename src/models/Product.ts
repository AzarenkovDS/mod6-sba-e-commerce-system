import {
  IProduct,
  ProductDimensions,
  ProductMeta,
  Review,
} from "../types/product-types";

export default class Product {
  protected id: number;
  protected title: string;
  protected description: string;
  protected category: string;
  protected price: number;
  protected discountPercentage: number;
  protected rating: number;
  protected stock: number;
  protected tags: string[];
  protected brand: string;
  protected sku: string;
  protected weight: number;
  protected dimensions: ProductDimensions;
  protected warrantyInformation: string;
  protected shippingInformation: string;
  protected availabilityStatus: string;
  protected reviews: Review[];
  protected returnPolicy: string;
  protected minimumOrderQuantity: number;
  protected meta: ProductMeta;
  protected thumbnail: string;
  protected images: string[];

  constructor(product: IProduct) {
    this.id = Math.round(Math.random() * 10000000000);
    this.title = product.title;
    this.description = product.description;
    this.category = product.category;
    this.price = product.price;
    this.discountPercentage = product.discountPercentage;
    this.rating = product.rating;
    this.stock = product.stock;
    this.tags = product.tags;
    this.brand = product.brand;
    this.sku = product.sku;
    this.weight = product.weight;
    this.dimensions = product.dimensions;
    this.warrantyInformation = product.warrantyInformation;
    this.shippingInformation = product.shippingInformation;
    this.availabilityStatus = product.availabilityStatus;
    this.reviews = product.reviews;
    this.returnPolicy = product.returnPolicy;
    this.minimumOrderQuantity = product.minimumOrderQuantity;
    this.meta = product.meta;
    this.thumbnail = product.thumbnail;
    this.images = product.images;
  }

  public displayDetails(): void {
    console.log(this);
  }

  public getPriceWithDiscount(): number {
    return this.price * (1 - this.discountPercentage / 100);
  }
}
