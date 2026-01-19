"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
    const { isAuth, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout(); 
    router.push("/login");
  };
   return (
      <div className="px-4 py-3 border-b-2 border-gray-500 flex justify-between items-center flex-wrap w-9/12 mx-auto">
         <Link href="/" className="font-bold text-5xl">
            Home
         </Link>

         <nav className="space-x-5 font-semibold flex items-center">
            <Link href="/products">Product</Link>
            <Link href="/AddProducts">Add-Product</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>

            {!isAuth ? (
               <Link href="/login">Login</Link>
            ) : (
               <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg  text-red-700  transition"
               >
                  Logout
               </button>
            )}
         </nav>
      </div>
   );
};

export default Navbar;
