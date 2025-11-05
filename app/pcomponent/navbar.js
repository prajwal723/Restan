"use client";
import React from "react";
import { useState } from "react";
import {useRouter} from "next/navigation";
export default function Navbar() {
  const [menu,setmenu]=useState(false);
  const router = useRouter();
  return (
    <nav className="bg-white p-4 md:px-10 md:fixed md:z-1 md:w-full md:top-0 md:z-50">
      <ul className="flex justify-between text-black text-lg font-semibold  items-center md:justify-start  md:mr-20">
        <li>
            <img src="https://img.icons8.com/?size=100&id=3096&format=png&color=1A1A1A" alt="menu" className="h-8 md:hidden " onClick={()=>{setmenu(!menu)}}/>
        </li>
        <li>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo.png&w=1920&q=75" alt="Logo" className="h-16 md:mr-96 md:h-24 "/>
        </li>
        <ul className="md:flex md:gap-14 flex-row hidden text-center">
          <li onClick={()=>router.push('/')}>Home</li>
          <li onClick={()=>router.push('/menu')}>Menu</li>
          <li onClick={()=>router.push('/blog')}>Blog</li>
          <li onClick={()=>router.push('/shop')}>Shop</li>
        </ul>

        <li>
            <img src="https://img.icons8.com/?size=100&id=59997&format=png&color=1A1A1A" alt="cart" className="h-12 md:ml-80" onClick={()=>router.push('/cart')}/>
        </li>
      </ul>
      {menu?<Menucontent/>:null}
    </nav>
  );
}

function Menucontent(){
  const router=useRouter();
  const[content,setcontent]=useState(true);
  return<>
    <div className={`${content ? "block" : "hidden"} fixed top-0 left-0 w-5/6 h-full text-black bg-white shadow-md z-1`}>
      <ul className="flex flex-col justify-around  p-4 space-y-4 text-lg font-medium">
        <div className="flex flex-row justify-between">
          <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo.png&w=1920&q=75" alt="Logo" className="h-14 mb-6"/>
          <button className="text-3xl" onClick={()=>{setcontent(!content)}}>❌</button>
        </div>
        <li className="hover:text-red-600 cursor-pointer" onClick={() =>router.push('/')}>Home</li>
        <hr className="border-gray-300"/>
        <li className="hover:text-red-600 cursor-pointer" onClick={() =>router.push('/about')}>About us</li>
        <hr className="border-gray-300"/>
        <li className="hover:text-red-600 cursor-pointer" onClick={() =>router.push('/menu')}>Menu</li>
        <hr className="border-gray-300"/>
        <li className="hover:text-red-600 cursor-pointer" onClick={() =>router.push('/reservation')}>Reservation</li>
        <hr className="border-gray-300"/>
        <li className="hover:text-red-600 cursor-pointer" onClick={() =>router.push('/shop')}>Shop</li>
        <hr className="border-gray-300"/>
        <li className="hover:text-red-600 cursor-pointer" onClick={() =>router.push('/login')}>Login</li>
        <hr className="border-gray-300"/>
        <li className="hover:text-red-600 cursor-pointer" onClick={() =>router.push('/blog')}>Blog</li>
      </ul>
    </div>
  </>
}