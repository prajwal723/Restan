"use client"
import { useState,useEffect} from "react";
import Navbar from "../pcomponent/navbar";
import Herosection from "../pcomponent/herosection";
import Footer from "../Acomponent/Footer/page";

export default function CartPage() {
    const products=[
        {
            imgsrc:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F1.png&w=1080&q=75",
            desc:"Cheese,Pizza", title:"Margherita Pizza", price:"12.00", id:1
        },
        {
            imgsrc:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F2.png&w=1080&q=75",
            desc:"Creamy,Burger", title:"Burger" ,price:"8.00", id:2
        },{
            imgsrc:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F3.png&w=1080&q=75",
            desc:"Beef,Steak" ,title:"Grilled Flank Steak", price:"14.00", id:3
        },{
            imgsrc:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F4.png&w=1080&q=75",
            desc:"BBQ,Meat" ,title:"Barbecue Chicken" ,price:"8.00", id:4
        },{
            imgsrc:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F5.png&w=1080&q=75",
            desc:"Food,Roll" ,title:"Vegetable Roll" ,price:"25.00", id:5
        },{
            imgsrc:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F6.png&w=1080&q=75",
            desc:"Pasta,Spicy" ,title:"Creamy Pasta", price:"18.00", id:6
        },{
            imgsrc:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F7.png&w=1080&q=75",
            desc:"Meat,Shawarma" ,title:"Chicken Shawarma", price:"3.00", id:7
        },{
            imgsrc:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F8.png&w=1080&q=75",
            desc:"Sandwich,Chicken" ,title:"Submarine Sandwich", price:"6.00", id:8
        }
        ];
         const savedIds = JSON.parse(localStorage.getItem("cartItems")) || [];
    return (
        <>
            <Navbar />
            <Herosection title="Your Cart" />
          <div className="bg-gray-600">  <table className="mb-40 border-2 w-full">
                <thead>
                   <tr>
                        <th>Remove</th>
                        <th>Thumbnail</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                   </tr>
                </thead>

                <tbody>
                   useEffect(
                    const uniqueIds = ids.reduce((acc, num) => {
  
  if (!acc.includes(num)) {
    acc.push(num);
  }
  );
                    )
                   )
                </tbody>
            </table>
            <Footer /></div>
        </>
    );
}
