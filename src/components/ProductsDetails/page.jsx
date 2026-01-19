"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ProductDetailsPage() {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://scic-12-a9-next-js-server.vercel.app/products/${id}`) // Express API endpoint
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (loading) return <p className="text-center mt-8">Loading product...</p>;
  if (!product) return <p className="text-center mt-8">Product not found</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 flex justify-center">
  <div className="bg-white shadow-lg rounded-lg max-w-2xl w-full overflow-hidden">
    {/* Product Image */}
    <div className="w-full h-auto relative">
      <Image
        src={product.imageUrl.replace(".com.", ".")} // Fix for Next.js
        alt={product.title}
        width={624}  // original width of image
        height={426} // original height of image
        className="object-cover w-full rounded-t-lg"
      />
    </div>

    {/* Product Details */}
    <div className="p-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-gray-500 mb-2">Category: {product.category}</p>
      <p className="text-gray-500 mb-2">Brand: {product.brand}</p>
      <p className="text-gray-500 mb-2">Stock: {product.stock}</p>
      <p className="text-gray-800 font-bold text-xl mt-2">৳ {product.price}</p>

      
    </div>
  </div>
</div>

  );
}
