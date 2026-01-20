"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../Context/AuthContext";
import { useRouter } from "next/navigation";

const AddProductPage = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const router = useRouter();

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const newProduct = {
      title: form.title.value,
      category: form.category.value,
      price: parseFloat(form.price.value),
      stock: parseInt(form.stock.value),
      brand: form.brand.value,
      description: form.description.value,
      imageUrl: form.imageUrl.value,
      addedBy: user?.email || "admin@example.com",
    };

    fetch("https://scic-12-a9-next-js-server.vercel.app/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        newProduct._id = data.insertedId;
        setProducts([...products, newProduct]);
        toast.success("Product added successfully!");
        form.reset();
        setTimeout(() => router.push("/products"), 1500);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to add product");
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors">
      <ToastContainer />
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Add New Product
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Fill out the form below to add a new product to your shop.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleAddProduct} className="space-y-6">
          {/* Product Name & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700 dark:text-gray-200">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Product Title"
                required
                className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#192489]"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700 dark:text-gray-200">Category</label>
              <input
                type="text"
                name="category"
                placeholder="Category"
                required
                className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#192489]"
              />
            </div>
          </div>

          {/* Price & Stock */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700 dark:text-gray-200">Price</label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                required
                className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#192489]"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700 dark:text-gray-200">Stock</label>
              <input
                type="number"
                name="stock"
                placeholder="Stock Quantity"
                required
                className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#192489]"
              />
            </div>
          </div>

          {/* Brand */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700 dark:text-gray-200">Brand</label>
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              required
              className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#192489]"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700 dark:text-gray-200">Description</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Product Description"
              required
              className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#192489] resize-none"
            />
          </div>

          {/* Image URL */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700 dark:text-gray-200">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              required
              className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#192489]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700 dark:text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              readOnly
              defaultValue={user?.email}
              className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#192489]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-[#192489] text-white font-semibold hover:bg-[#141d6f] transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProductPage;
