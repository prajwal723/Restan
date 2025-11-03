import Navbar from "../pcomponent/navbar";
import Herosection from "../pcomponent/herosection"; 
import FoodMenu from "../pcomponent/menucontent";

export default function MenuPage() {
    return <>
        <Navbar/>
        <Herosection title="Food Menu"/>
        <div className="bg-gray-200 pt-8 pb-20 overflow-x-hidden md:pt-24">
            <h2 className="text-[#826a45] font-serif text-xl text-center font-medium md:text-2xl md:mb-3">CATEGORY</h2>
            <h1 className="font-bold text-4xl text-black text-center md:text-6xl">Choose Your Best Food</h1>
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
                        <button className="bg-[#826a45] p-4 mt-6 text-white px-8 rounded-4xl hover:bg-black md:text-2xl">Order Now</button>
                    </div>
                    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F11.png&w=1920&q=75" alt="delivery boy" className="hidden md:block md:w-1/3 absolute right-10 top-20"/>
                </div>


            <div className=" mt-28 m-3  space-y-3">
                 <h2 className="text-[#826a45] font-serif text-xl font-medium text-center md:text-2xl">HAPPY CUSTOMERS</h2>
                 <h1 className="font-bold text-4xl text-black text-center md:text-6xl">Our Customers Feedback</h1>
                <div className="md:flex md:flex-row md:justify-between md:mx-20">
                    <div className="relative">
                        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F4.jpg&w=640&q=75" alt="review" className="rounded-full my-5 h-72 shadow-md shadow-blue-200 md:h-96"/>
                        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F5.jpg&w=640&q=75" alt="a" className="absolute rounded-full h-28 border-3 hidden md:block shadow-2xl border-white top-3 left-64"/>
                        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75" alt="b" className="absolute rounded-full h-32 border-4 hidden md:block shadow-2xl border-white top-40 left-80"/>
                        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F7.jpg&w=640&q=75" alt="c" className="absolute rounded-full h-28 border-3 hidden md:block shadow-2xl border-white top-80 left-64"/>
                    </div>
                    <div className="md:w-1/2 md:mt-10 space-y-6">
                        <p className="text-gray-700 md:text-2xl">⭐⭐⭐⭐⭐ (5/5)</p>
                        <h1 className="font-bold text-4xl text-black ">The best food ever</h1>
                        <p className="text-gray-700 md:text-xl">“Targeting consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.”</p>
                        
                        <hr className=" border-black w-full"/>
                        
                       <div>
                            <p className="font-semibold font-serif text-2xl mb-2  text-black">Matthew J. Wyman</p>
                            <p className="text-[#826a45] font-semibold">SENIOR CONSULTANT</p>
                       </div>
                    </div>
                </div>
            </div> 
        </div>
        
    </>
}

