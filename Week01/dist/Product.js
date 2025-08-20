"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}
exports.Product = Product;
const listProducts = [
    new Product("Laptop", 1200),
    new Product("Smartphone", 800),
    new Product("Tablet", 50)
];
// filter products with price > 100
const filteredProducts = listProducts.filter(product => product.getPrice() > 100);
console.log(filteredProducts);
