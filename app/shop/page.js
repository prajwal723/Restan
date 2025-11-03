import Navbar from "../pcomponent/navbar";
import Herosection from "../pcomponent/herosection";

export default function ShopPage() {
    return <>
    <div className="bg-gray-200">
        <Navbar/>
        <Herosection title="Special Food"/>
        <div className="md:grid md:grid-cols-4 md:mx-7 md:pb-9">
            <Shopcontent img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F1.png&w=1080&q=75" desc="Cheese,Pizza" title="Margherita Pizza" price="12.00"/>
            <Shopcontent img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F2.png&w=1080&q=75" desc="Creamy,Burger" title="Burger" price="8.00"/>
            <Shopcontent img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F3.png&w=1080&q=75" desc="Beef,Steak" title="Grilled Flank Steak" price="14.00"/>
            <Shopcontent img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F5.png&w=1080&q=75" desc="BBQ,Meat" title="Barbecue Chicken" price="8.00"/>
            <Shopcontent img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F8.png&w=1080&q=75" desc="Food,Roll" title="Vegetable Roll" price="25.00"/>
            <Shopcontent img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F6.png&w=1080&q=75" desc="Pasta,Spicy" title="Creamy Pasta" price="18.00"/>
            <Shopcontent img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F7.png&w=1080&q=75" desc="Meat,Shawarma" title="Chicken Shawarma" price="3.00"/>
            <Shopcontent img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F4.png&w=1080&q=75" desc="Sandwich,Chicken" title="Submarine Sandwich" price="6.00"/>
        </div>
    </div>
    </>
}

function Shopcontent({img,desc,title,price}){
    return <>
    <div className="bg-white mx-3 mt-5 py-10 rounded-xl justify-items-center-safe  space-y-3">
        <img src={img} alt="foodproduct" className="h-48"/>
        <div className="text-center space-y-1.5">
            <p className="text-gray-700">{desc}</p>
            <p className="font-semibold  text-2xl text-black/80">{title}</p>
            <p className="text-[#826a45] text-xl font-semibold">${price}</p>
            <button className="border-2 border-[#826a45] rounded-3xl text-black/75 px-7 py-3 font-semibold text-[14px]">ADD TO CART</button>
        </div>
    </div>
    </>
}