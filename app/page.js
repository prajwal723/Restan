"use client";
import React from "react";
import { useState } from "react";
import Navbar from "./pcomponent/navbar";
import FoodMenu from "./pcomponent/menucontent";
import BlogContent from "./pcomponent/blogcontent";

export default function HomePage() {
return<>
<Navbar/>
    <div className="relative overflow-x-hidden bg-gray-100  pt-14">
        <img src="/best-restaurant.png" alt="Best restaurant" className=" scale-200"/>
        <h1  className=" absolute top-16 text-center font-bold text-4xl w-full">Best Restaurant</h1>
        <div className="pt-24">
            <h2 className="text-[#826a45] font-serif text-xl text-center font-medium">CATEGORY</h2>
            <h1 className="font-bold text-4xl text-black text-center">Choose Your Best Food</h1>
            <div>
                <FoodMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F1.jpg&w=1920&q=75" title="Pizza Slice" ratings="5.0"/>
                <FoodMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F2.jpg&w=1920&q=75" title="Cheese Burger" ratings="4.5"/> 
                <FoodMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F3.jpg&w=1920&q=75" title="Chicken Masala" ratings="4.8"/>
                <FoodMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F4.jpg&w=1920&q=75" title="Vegetable Roll" ratings="4.2"/>
             </div>
        </div>

        <div className="mt-8 m-3">
        <div className="relative mb-20 justify-items-center-safe">
            <div className="bg-red-700 rounded-full">
                <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2Fchef.png&w=2048&q=75" alt="chef image" className="rounded-full"/>
            </div>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F7.png&w=1200&q=75" alt="bread" className="absolute hidden h-28 left-36 top-56"/>
            <img src="/cheflogo.png" alt="cheflogo" className="absolute top-52 h-36  rounded-full"/>
        </div>

        <div className="space-y-4">
            <p className="text-red-700 text-2xl font-medium">About us</p>
            <p className="text-black text-4xl font-semibold">Come for our fresh,delicious food you won’t forget.</p>
            <p className="text-gray-700">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.</p>
            <button className="bg-red-700 text-white py-2 px-4 rounded-4xl">Discover More</button>
        </div>
        </div>

        <div className="bg-black mt-10 py-12 p-3 justify-start space-y-3">
                <h1 className="text-white font-medium">FOOD MENU</h1>
                <h2 className="text-white text-4xl my-5 font-semibold">Our Specials Menu</h2>
                <button className="p-4 w-full border-1 justify-between flex border-gray-300 rounded-lg bg-red-700">MAIN DISHES
                    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F9.png&w=64&q=75" alt="icon" className="h-4"/>
                </button>
                <button className="p-4 w-full border-1 justify-between flex border-gray-300 rounded-lg">DESSERTS
                    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F10.png&w=64&q=75" alt="icon" className="h-4"/>
                </button>
                <button className="p-4 w-full border-1 justify-between flex border-gray-300 rounded-lg">SEA FOOD
                    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F11.png&w=64&q=75" alt="icon" className="h-4"/>
                </button>
                <button className="p-4 w-full border-1 justify-between flex border-gray-300 rounded-lg">BEVERAGE
                    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F12.png&w=64&q=75" alt="icon" className="h-4"/>
                 </button>
        </div>
        <Dishes title="Chicken Alfredo" price1="$20" price2="$40" desc="Ricotta / goat cheese / beetroot"/>
        <Dishes title="Fish Chips" price1="$36" price2="$70" desc="Atlantic / chips / salad / tartare"/>
        <Dishes title="Ebony Fillet Steak" price1="$44" price2="$85" desc="Truffle mash / pepper sauce"/>
        <Dishes title="Chicken Grill" price1="$20" price2="$40" desc="Ricotta / goat cheese / beetroot"/>

        <div className="justify-items-center-safe mt-10 m-3 space-y-7">
            <div>
                <p className="text-red-700 text-center mb-1 font-semibold text-xl">FOOD ITEM</p>
                <p className="text-black text-center font-semibold text-3xl">Our Food Gallery</p>
            </div>
            <img src="https://restan-nextjs.vercel.app/assets/img/portfolio/1.jpg" alt="item"/>
            <img src="https://restan-nextjs.vercel.app/assets/img/portfolio/2.jpg" alt="item"/>
            <img src="https://restan-nextjs.vercel.app/assets/img/portfolio/3.jpg" alt="item"/>
            <img src="https://restan-nextjs.vercel.app/assets/img/portfolio/6.jpg" alt="item"/>
            <img src="https://restan-nextjs.vercel.app/assets/img/portfolio/5.jpg" alt="item"/>

        </div>


        <div className="justify-items-center-safe m-3 mt-28 text-center space-y-3">
            <h2 className="text-red-600 font-serif text-xl font-medium">HAPPY CUSTOMERS</h2>
            <h1 className="font-bold text-4xl text-black">Our Customers Feedback</h1>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F4.jpg&w=640&q=75" alt="review" className="rounded-full my-5 h-72 shadow-md shadow-blue-200"/>
            <p className="text-gray-700">⭐⭐⭐⭐⭐ (5/5)</p>
            <h1 className="font-bold text-4xl text-black text-center">The best food ever</h1>
            <p className="text-gray-700">“Targeting consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.”</p>
            <br/>
            <hr className=" border-black w-full"/>
            <br/>
            <p className="font-semibold font-serif text-2xl text-black">Matthew J. Wyman</p>
            <p className="text-red-600 font-semibold">SENIOR CONSULTANT</p>
        </div> 

        <div className="bg-gray-900 relative p-3 pb-72 pt-14 mt-10 mb-32 space-y-6">
            <h1 className="font-semibold text-2xl">Reservation</h1>
            <h2 className="font-semibold text-4xl">Reservation Your Favorite Private Table</h2>
            <p className="text-[15px]">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.</p>
            <div className="space-y-4">
                <div>
                    <p  className="font-semibold my-2 text-2xl">Launch Menu</p>
                    <p>30+ items</p>
                </div>
                <div>
                    <p  className="font-semibold my-2 text-2xl">Dinner Menu</p>
                    <p>50+ items</p>
                </div>
            </div>
            
            <div className="bg-zinc-900 absolute m-3 left-0  p-3 py-12 border border-gray-600 rounded-3xl">
                <form className="space-y-3" onSubmit={()=>{alert("Table Booked!")}}>
                <input type="tel" placeholder="Phone Number" minLength={10} maxLength={10} required className="border bg-gray-600 border-gray-300 p-2 rounded-md w-full" />
                <div className="border-gray-300  border bg-gray-600 p-2 rounded-md w-full">
                    <select >
                        <option className="text-black">1 Person</option>
                        <option className="text-black">2 Person</option>
                        <option className="text-black">3 Person</option>
                        <option className="text-black">4 Person</option>
                        <option className="text-black">5 Person</option>
                    </select>
                </div>
                <input type="date" placeholder="Date" required className="border bg-gray-600 border-gray-300 p-2 text-white rounded-md w-full" />
                <input type="time" placeholder="Time" required className="border bg-gray-600 border-gray-300 p-2 rounded-md w-full" />
                <button type="submit" className="text-white bg-red-800 p-3 rounded-xl px-6" >Book A Table</button>
                </form>
            </div>
            
        </div>


        <div className="mt-14 justify-items-center space-y-3">
            <h1 className="text-xl text-red-700 font-serif font-medium">NEWS & BLOG</h1>
            <h2 className="text-3xl text-black text-center font-semibold ">Our Latest News & Blog</h2>
            <BlogContent image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=3840&q=75" title="Picked up a Brussels burger Sprouts." />
            <BlogContent image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2-full.jpg&w=3840&q=75" title="This prefabricated passive house highly"/>
        </div>
    </div>
</>

}

function Dishes({title,price1,price2,desc}){
    return <>
        <div className="pt-5 mx-3">
            <div className="mb-2 flex flex-row justify-between">
                <div className="text-black font-semibold text-xl">{title}</div> 
                <div className="text-red-700 font-semibold text-xl">{price1} - {price2}</div>
            </div>
            <p className="text-gray-700 ">{desc}</p>
            <p className="text-gray-700 ">Free Drinks</p>
            <hr className="border-1 mt-5 border-gray-300"/>
        </div>
    </>
}