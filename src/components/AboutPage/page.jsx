"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://scic-12-a9-next-js-server.vercel.app/products") // your Express API
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); // store all products
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  // Slice first 3 products for Featured section
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="w-9/12 mx-auto bg-gray-100 min-h-screen">
      {/* Hero Section */}
      

      {/* About Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-center">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
          At ElectroShop, we specialize in providing a wide range of electronics for everyone.
          From high-performance laptops and smartphones to headphones, monitors, and accessories,
          we ensure every product is of top quality and value.
        </p>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Featured Products</h2>

        {loading ? (
          <p className="text-center text-gray-700">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product._id} href={`/products/${product._id}`}>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                            <Image
                                src={product.imageUrl.replace(".com.", ".")} // fix for Next.js
                                alt={product.title}
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
        )}
      </section>
    </div>
  );
}
