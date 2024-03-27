export interface Product {
    id: number;
    name: string;
    price: number;
    count: number;
    rating: number;
    imageUrl: string;
    category: {
        id: number;
        name: string;
    };
}
