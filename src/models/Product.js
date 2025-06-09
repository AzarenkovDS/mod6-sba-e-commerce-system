"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(product) {
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
    displayDetails() {
        console.log(this);
    }
    getPriceWithDiscount() {
        return this.price * (1 - this.discountPercentage / 100);
    }
}
exports.default = Product;
