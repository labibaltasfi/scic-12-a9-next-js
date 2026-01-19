
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
       <div className='px-4 py-3 border-b-2 border-gray-500 flex justify-between items-center flex-wrap w-9/12 mx-auto'>
            <Link href="/" className='font-bold text-5xl'>Home</Link>
         <nav className='space-x-5 font-semibold'>
            <Link href="/product">Product</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/login">Login</Link>
        </nav>
       </div>
    );
};

export default Navbar;