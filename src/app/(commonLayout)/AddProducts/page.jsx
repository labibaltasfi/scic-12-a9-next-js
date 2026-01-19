"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/Context/AuthContext";
import AddProductForm from "../../../components/AddProductsForm/page";


const AddProductPage = () => {
  const { isAuth } = useAuth();
  const router = useRouter();

  // If not logged in, redirect to login page
  React.useEffect(() => {
    if (!isAuth) {
      router.push("/login");
    }
  }, [isAuth, router]);

  if (!isAuth) {
    // Optional: show nothing or a loading message while redirecting
    return <p className="text-center mt-20">Redirecting to login...</p>;
  }

  return <AddProductForm />; 
};

export default AddProductPage;
