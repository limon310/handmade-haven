// import Link from 'next/link';
// import React from 'react';

// const Navbar = () => {
//     return (
//         <div className='navbar bg-secondary text-white px-4 md:px-12 sticky top-0 z-50 shadow-md'>
//             <div className="navbar max-w-7xl mx-auto">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                         </div>
//                         <ul
//                             tabIndex="-1"
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                             <li><a>Item 1</a></li>
//                             <li>
//                                 <a>Parent</a>
//                                 <ul className="p-2">
//                                     <li><a>Submenu 1</a></li>
//                                     <li><a>Submenu 2</a></li>
//                                 </ul>
//                             </li>
//                             <li><a>Item 3</a></li>
//                         </ul>
//                     </div>
//                     <Link href="/" className="text-xl font-serif font-bold tracking-wider text-white">
//                         HANDMADE <span className="text-accent">HAVEN</span>
//                     </Link>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         <li><a>Item 1</a></li>
//                         <li>
//                             <details>
//                                 <summary>Parent</summary>
//                                 <ul className="p-2 bg-base-100 w-40 z-1">
//                                     <li><a>Submenu 1</a></li>
//                                     <li><a>Submenu 2</a></li>
//                                 </ul>
//                             </details>
//                         </li>
//                         <li><a>Item 3</a></li>
//                     </ul>
//                 </div>
//                 <div className="navbar-end">
//                     <Link href={"/login"} className="btn">Login</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    // Check login status from cookies on component mount
    useEffect(() => {
        const checkAuth = () => {
            const cookies = document.cookie.split("; ");
            const authCookie = cookies.find((row) => row.startsWith("isLoggedIn="));
            setIsLoggedIn(!!authCookie);
        };

        checkAuth();
        // Listen for custom events or storage changes if needed
        window.addEventListener("focus", checkAuth);
        return () => window.removeEventListener("focus", checkAuth);
    }, []);

    const handleLogout = () => {
        // Clear the cookie
        document.cookie = "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setIsLoggedIn(false);
        router.push("/");
    };

    return (
        <div className="navbar bg-secondary text-white px-4 md:px-12 sticky top-0 z-50 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                        <IoMenu size={24} />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-white text-secondary rounded-box w-52">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/items">Items</Link></li>
                        {isLoggedIn && <li><Link href="/dashboard">Dashboard</Link></li>}
                    </ul>
                </div>
                <Link href="/" className="text-xl font-serif font-bold tracking-wider text-white">
                    HANDMADE <span className="text-accent">HAVEN</span>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    <li><Link href="/" className="hover:text-accent">Home</Link></li>
                    <li><Link href="/items" className="hover:text-accent">Items</Link></li>
                    {isLoggedIn && (
                        <li><Link href="/dashboard" className="hover:text-accent">Dashboard</Link></li>
                    )}
                </ul>
            </div>

            <div className="navbar-end">
                {isLoggedIn ? (
                    <button
                        onClick={handleLogout}
                        className="btn btn-primary btn-sm md:btn-md"
                    >
                        Logout
                    </button>
                ) : (
                    <Link href="/login" className="btn btn-primary btn-sm md:btn-md">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
}