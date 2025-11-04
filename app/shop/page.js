"use client"
import Navbar from "../pcomponent/navbar";
import Herosection from "../pcomponent/herosection";
import Footer from "../Acomponent/Footer/page";

export default function ShopPage() {
    return <>
    <div className="bg-gray-200 dark:bg-neutral-900">
        <Navbar/>
        <Herosection title="Special Food"/>
        <div className="md:grid md:grid-cols-4 md:mx-7 md:mt-10 md:pb-9 ">
            <Shopcontent img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F1.png&w=1080&q=75" desc="Cheese,Pizza" title="Margherita Pizza" price="12.00"/>
            <Shopcontent img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F2.png&w=1080&q=75" desc="Creamy,Burger" title="Burger" price="8.00"/>
            <Shopcontent img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F3.png&w=1080&q=75" desc="Beef,Steak" title="Grilled Flank Steak" price="14.00"/>
            <Shopcontent img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F5.png&w=1080&q=75" desc="BBQ,Meat" title="Barbecue Chicken" price="8.00"/>
            <Shopcontent img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F8.png&w=1080&q=75" desc="Food,Roll" title="Vegetable Roll" price="25.00"/>
            <Shopcontent img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F6.png&w=1080&q=75" desc="Pasta,Spicy" title="Creamy Pasta" price="18.00"/>
            <Shopcontent img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F7.png&w=1080&q=75" desc="Meat,Shawarma" title="Chicken Shawarma" price="3.00"/>
            <Shopcontent img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F4.png&w=1080&q=75" desc="Sandwich,Chicken" title="Submarine Sandwich" price="6.00"/>
        </div>
        <div className="mt-4 md:mt-0 md:mb-40 flex justify-center space-x-3 "> 
            <button className="bg-stone-400 dark:bg-stone-600 px-3.5 py-2 rounded-lg border border-gray-500 hover:bg-stone-500 hover:scale-105">1</button>
            <button className="bg-stone-400 dark:bg-stone-600 px-3.5 py-2 rounded-lg border border-gray-500 hover:bg-stone-500 hover:scale-105">2</button>
            <button className="bg-stone-400 dark:bg-stone-600 px-3.5 py-2 rounded-lg border border-gray-500 hover:bg-stone-500 hover:scale-105">3</button>
        </div>
        <Footer/>
    </div>
    </>
}

function Shopcontent({img,desc,title,price}){
  
    const Onset=()=>{
        localStorage.setItem("cross","❌");
        localStorage.setItem("img",img);
        localStorage.setItem("title",title);
        localStorage.setItem("price",price);
        localStorage.setItem("quantity","1️");
    }
    return <>
    <div className="bg-white dark:bg-neutral-700/65  mx-3 mt-5 py-10 rounded-xl  justify-items-center-safe  space-y-3 hover:scale-105 group">
        <img src={img} alt="foodproduct" className="h-48"/>
        <div className="text-center space-y-1.5 ">
            <p className="text-gray-700 dark:text-white">{desc}</p>
            <p className="font-semibold  text-2xl text-black/80 dark:text-white ">{title}</p>
            <p className="text-[#826a45] text-xl font-semibold dark:text-[#daa85d]">${price}</p>
            <button className="border-2 border-[#826a45] dark:text-white group-hover:bg-[#826a45] group-hover:text-white rounded-3xl text-black/75 px-7 py-3 font-semibold text-[14px] " onClick={()=>{Onset(); alert("Added to cart");}}>ADD TO CART</button>
        </div>
    </div>
    </>
}