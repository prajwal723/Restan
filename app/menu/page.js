"use client"
import Navbar from "../pcomponent/navbar";
import Herosection from "../pcomponent/herosection"; 
import FoodMenu from "../pcomponent/menucontent";
import Footer from "../Acomponent/Footer/page";
import { useRouter } from "next/navigation";
import Booktable from "../pcomponent/booktable";
import CustomerReview from "../pcomponent/customerreview";

export default function MenuPage() {
    const router=useRouter();
    return <>
        <Navbar/>
        <Herosection title="Food Menu"/>
        <div className="bg-gray-200 dark:bg-neutral-900 pt-8 pb-20 overflow-x-hidden md:pt-24 md:pb-40 ">
            <h2 className="text-[#826a45] font-serif text-xl text-center font-medium md:text-2xl md:mb-3 dark:text-[#daa85d]">CATEGORY</h2>
            <h1 className="font-bold text-4xl text-black text-center md:text-6xl dark:text-white">Choose Your Best Food</h1>
            <div className="md:grid md:grid-cols-4 md:mx-14 ">
                <FoodMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F1.jpg&w=1920&q=75" title="Pizza Slice" ratings="5.0"/>
                <FoodMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F2.jpg&w=1920&q=75" title="Cheese Burger" ratings="4.5"/> 
                <FoodMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F3.jpg&w=1920&q=75" title="Chicken Masala" ratings="4.8"/>
                <FoodMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F4.jpg&w=1920&q=75" title="Vegetable Roll" ratings="4.2"/>
                <FoodMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F17.jpg&w=1920&q=75" title="Salmon Steak" ratings="4.9"/>
                <FoodMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F18.jpg&w=1920&q=75" title="Fries McDonald's" ratings="4.7"/>
                <FoodMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F19.jpg&w=1920&q=75" title="Chocolate chip" ratings="4.9"/>
                <FoodMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F20.jpg&w=1920&q=75" title="Meatballs Pasta" ratings="4.8"/>
            </div>

            
                <div className="px-3  py-10 bg-black/85 w-full mt-20 text-white md:px-20 md:py-24 md:flex md:flex-row relative ">
                    <div className="space-y-7">
                        <h1 className="text-5xl  font-medium md:text-8xl md:w-1/2">30 Minutes Delivery!</h1>
                        <p className="text-[15px] text-gray-300  my-2.5 md:w-1/2 md:text-lg">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.</p>
                        <button className="bg-[#826a45] p-4 mt-6 text-white px-8 rounded-4xl hover:bg-black md:text-2xl" onClick={()=>router.push('/shop')}>Order Now</button>
                    </div>
                    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F11.png&w=1920&q=75" alt="delivery boy" className="hidden md:block md:w-1/3 absolute right-10 top-20 z-1"/>
                </div>


            <section>
                <CustomerReview/>
            </section>

            <section>
                <Booktable/>
            </section> 
        </div>
        <Footer/>
        
    </>
}

