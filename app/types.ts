export type Order = {
    order_id: number;
    user_id: number;
    order_date: string;
    status: "Shipped" | "Delivered" | "Processing";
    total_price: number;
    shipping_address: {
        street: string;
        city: string;
        postal_code: string;
        country: string;
    };
    items: [
        {
            product_id: number;
            name: string;
            quantity: number;
            price: number;
        }
    ];
};

export type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
    description: string;
    image_url: string;
    rating: number;
    reviews_count: number;
    brand: string;
};

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    address: {
        street: string;
        city: string;
        postal_code: string;
        country: string;
    };
    phone: string;
    orders: UserOrder[];
};

export type UserOrder = {
    order_id: number;
    product_id: number;
    quantity: number;
    total_price: number;
    order_date: string;
};