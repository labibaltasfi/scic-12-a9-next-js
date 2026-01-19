"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const FALLBACK_IMAGE = "/placeholder.png"; // put image in /public

    const getSafeImage = (url) => {
        try {
            if (!url) return FALLBACK_IMAGE;
            return new URL(url).href;
        } catch {
            return FALLBACK_IMAGE;
        }
    };

    useEffect(() => {
        fetch("https://scic-12-a9-next-js-server.vercel.app/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, []);

    if (loading) return <p>Loading products...</p>;

    return (
        <div className="min-h-screen p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <Link key={product._id} href={`/products/${product._id}`}>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                            <Image
                                src={getSafeImage(product.imageUrl)}
                                alt={product.title || "Product Image"}
                                width={400}
                                height={300}
                                className="object-cover w-full"
                            />

                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                                <p className="text-gray-600 mb-1">Category: {product.category}</p>
                                <p className="text-gray-600 mb-1">Brand: {product.brand}</p>
                                <p className="text-gray-800 font-bold mb-2">৳ {product.price}</p>
                                <p className="text-gray-500 text-sm">Stock: {product.stock}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    );
}
