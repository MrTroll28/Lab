export class Product {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }

}

const listProducts: Product[] = [
    new Product("Laptop", 1200),
    new Product("Smartphone", 800),
    new Product("Tablet", 50)
];

// filter products with price > 100
const filteredProducts = listProducts.filter(product => product.getPrice() > 100);
console.log(filteredProducts);
