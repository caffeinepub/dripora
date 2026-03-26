import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type ProductId = bigint;
export interface Product {
    id: ProductId;
    tag: Tag;
    name: string;
    description: string;
    imageUrl: string;
    category: Category;
    price: number;
}
export enum Category {
    accessories = "accessories",
    tops = "tops",
    bottoms = "bottoms",
    outerwear = "outerwear"
}
export enum Tag {
    y2k = "y2k",
    techwear = "techwear",
    futuristic = "futuristic",
    streetwear = "streetwear",
    old_school = "old_school"
}
export interface backendInterface {
    addEmail(email: string): Promise<void>;
    addProduct(newProduct: Product): Promise<ProductId>;
    getAllEmails(): Promise<Array<string>>;
    getAllProducts(): Promise<Array<Product>>;
    getProduct(productId: ProductId): Promise<Product>;
    getProductsByCategory(category: Category): Promise<Array<Product>>;
    getProductsByTag(tag: Tag): Promise<Array<Product>>;
    seedProducts(): Promise<void>;
    updateProduct(productId: ProductId, updatedProduct: Product): Promise<void>;
}
