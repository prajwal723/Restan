"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "./pcomponent/navbar"
import Footer from "./Acomponent/Footer/page";
import Herosection from "./pcomponent/herosection";

export default function NotFound() {
  const router = useRouter();
 return (
  <>
  <Navbar/>
  <Herosection title="Error Page"/>
    <div className="flex flex-col px-3 items-center justify-center pt-16 pb-24 md:pb-48 space-y-3 bg-gray-50 text-center relative dark:bg-neutral-900 ">
      <img src="https://restan-nextjs.vercel.app/assets/img/shape/44-left.png" alt="left wire" className="absolute left-0 opacity-50 hidden md:block"/>
      <img src="https://restan-nextjs.vercel.app/assets/img/shape/44-right.png" alt="right wire" className="absolute right-0 opacity-50 hidden md:block"/>
      <h1 className="text-9xl font-bold text-black dark:text-white">404</h1>
      <p className="text-4xl font-semibold text-gray-800 my-4 dark:text-gray-300">Sorry Page Was Not Found!</p>
      <p className="text-gray-500 mb-8 dark:text-neutral-400">The page you are looking for doesn't exist or has been moved.</p>
      <button onClick={() => router.push("/")} className="px-10 py-4 bg-[#826a45] text-white  hover:bg-red-700 corsor-pointer">
        Back To Home
      </button>
    </div>
  <Footer/>
  </>
  );
}