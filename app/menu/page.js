import Navbar from "../pcomponent/navbar";
import Herosection from "../pcomponent/herosection"; 
import FoodMenu from "../pcomponent/menucontent";

export default function MenuPage() {
    return <>
        <Navbar/>
        <Herosection title="Food Menu"/>
        <div className="bg-gray-200 pt-8 pb-20 overflow-x-hidden ">
            <h2 className="text-[#826a45] font-serif text-xl text-center font-medium">CATEGORY</h2>
            <h1 className="font-bold text-4xl text-black text-center">Choose Your Best Food</h1>
            <div>
                <FoodMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F1.jpg&w=1920&q=75" title="Pizza Slice" ratings="5.0"/>
                <FoodMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F2.jpg&w=1920&q=75" title="Cheese Burger" ratings="4.5"/> 
                <FoodMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F3.jpg&w=1920&q=75" title="Chicken Masala" ratings="4.8"/>
                <FoodMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F4.jpg&w=1920&q=75" title="Vegetable Roll" ratings="4.2"/>
                <FoodMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F17.jpg&w=1920&q=75" title="Salmon Steak" ratings="4.9"/>
                <FoodMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F18.jpg&w=1920&q=75" title="Fries McDonald's" ratings="4.7"/>
                <FoodMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F19.jpg&w=1920&q=75" title="Chocolate chip" ratings="4.9"/>
                <FoodMenu image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F20.jpg&w=1920&q=75" title="Meatballs Pasta" ratings="4.8"/>
            </div>
            <div className="relative">
                <img src="https://img.freepik.com/premium-photo/wood-dark-background-texture-blank-design-brown-wooden-table-space-text_209875-228.jpg" alt="banner" className="w-full mt-20 scale-150"/>
                <div className=" absolute scale-150 top-0 px-16 py-3 bg-black/40 w-full h-full">
                    <h1 className="text-2xl font-medium">30 Minutes Delivery!</h1>
                    <p className="text-[9px] my-2.5 ">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.</p>
                    <button className="bg-[#826a45] p-2 text-white px-4 rounded-3xl text-[11px] hover:bg-black">Order Now</button>
                </div>
            </div>


            <div className="justify-items-center-safe mt-28 m-3 text-center space-y-3">
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
        </div>
        
    </>
}

