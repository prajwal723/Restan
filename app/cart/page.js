"use client";
import {useState, useEffect} from "react";
import Navbar from "../pcomponent/navbar";
import Herosection from "../pcomponent/herosection";
import Footer from "../Acomponent/Footer/page";
import Returntop from "../pcomponent/return-top/page";

export default function Cart(){
      <style>
                @import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');
                </style>
// const importeditems = JSON.parse(localStorage.getItem("cartt") || "[]");
// console.log(importeditems);
const [it0,setit0]=useState(0);
const [it1,setit1]=useState(0);
const [it2,setit2]=useState(0);
const [it3,setit3]=useState(0);
const [it4,setit4]=useState(0);
const [it5,setit5]=useState(0);
const [it6,setit6]=useState(0);
const [it7,setit7]=useState(0);

const [nit0,setnit0]=useState(0);
const [nit1,setnit1]=useState(0);
const [nit2,setnit2]=useState(0);
const [nit3,setnit3]=useState(0);
const [nit4,setnit4]=useState(0);
const [nit5,setnit5]=useState(0);
const [nit6,setnit6]=useState(0);
const [nit7,setnit7]=useState(0);

        const [amt0,setamt0]=useState(12);
         const [amt1,setamt1]=useState(8);
         const [amt2,setamt2]=useState(14);
         const [amt3,setamt3]=useState(8);
         const [amt4,setamt4]=useState(25);
         const [amt5,setamt5]=useState(18);
         const [amt6,setamt6]=useState(3);
         const [amt7,setamt7]=useState(6);

         const [famt,setfamt]=useState(0);


useEffect(()=>{
    const importeditems = JSON.parse(localStorage.getItem("cartt") || "[]");
   let selectedItems=[];
   let noItems=[];
   for(let i=0;i<8;i++){
    selectedItems[i]=0;
    noItems[i]=0;
   }
 let length =importeditems.length;
       for(let i=0;i<length;i++){
        let apple=parseInt(importeditems[i]);
            if(apple==1){
                selectedItems[0]=1;
                noItems[0]++;
            }else if(apple==2){
                selectedItems[1]=1;
                noItems[1]++;
            }else if(apple==3){
                selectedItems[2]=1;
                noItems[2]++;
            }else if(apple==4){
                selectedItems[3]=1;
                noItems[3]++;
            }else if(apple==5){
                selectedItems[4]=1;
                noItems[4]++;
            }else if(apple==6){
                selectedItems[5]=1;
                noItems[5]++;
            }else if(apple==7){
                selectedItems[6]=1;
                noItems[6]++;
            }else{
                selectedItems[7]=1;
                noItems[7]++;
            }
           
       }
         setit0(selectedItems[0]);
         setit1(selectedItems[1]);
         setit2(selectedItems[2]);
         setit3(selectedItems[3]);
         setit4(selectedItems[4]);
         setit5(selectedItems[5]);
         setit6(selectedItems[6]);
         setit7(selectedItems[7]);

         setnit0(noItems[0]);
         setnit1(noItems[1]);
         setnit2(noItems[2]);
         setnit3(noItems[3]);
         setnit4(noItems[4]);
         setnit5(noItems[5]);
         setnit6(noItems[6]);
         setnit7(noItems[7]);

         setamt0(amt0*noItems[0]);
         setamt1(amt1*noItems[1]);
         setamt2(amt2*noItems[2]);
         setamt3(amt3*noItems[3]);
         setamt4(amt4*noItems[4]);
         setamt5(amt5*noItems[5]);
         setamt6(amt6*noItems[6]);
         setamt7(amt7*noItems[7]);

          setfamt(amt0*noItems[0] + amt1*noItems[1]+amt3*noItems[3]+amt4*noItems[4]+amt5*noItems[5]+amt6*noItems[6]+amt7*noItems[7]);
        
        },[]);
 
   
   return(<>
   <Navbar/>
   <Herosection title={"Cart"}/>

   <div className=" flex flex-col   md:flex hidden  bg-white pt-20 px-5">
                <div className={`flex flex-row bg-gray-200   justify-around w-full border-1 border-zinc-400`}>
                                  <div className="flex bg-gray-200  text-lg font-extrabold  text-zinc-500 pt-3">
                             Remove
                         </div>
                         <div className="flex bg-gray-200  text-lg font-extrabold h-13 text-zinc-500 pt-3">
                             Thumbnail
                         </div>
                         <div className="flex bg-gray-200  text-lg font-extrabold h-13 text-zinc-500 pt-3">
                             Product
                         </div>
                         <div className="flex bg-gray-200  text-lg font-extrabold h-13 text-zinc-500 pt-3">
                              Price
                         </div>
                         <div className="flex bg-gray-200  text-lg font-extrabold h-13 text-zinc-500 pt-3">
                             Quantity
                         </div>
                         <div className="flex bg-gray-200  text-lg font-extrabold h-13 text-zinc-500 pt-3"> 
                             Subtotal
                         </div>
                </div>
                    
                
                 <div className={`flex flex-row    ${it0 ==1 ? "block" : "hidden"} border-1 justify-around w-full border-zinc-400`}>
                                  <div className="flex bg-white   border-white">
                             <img src="https://img.icons8.com/?size=100&id=59754&format=png&color=FA5252" className="h-10 mx-auto my-auto"/>
                         </div>
                         <div className="flex bg-white  border-white">
                             <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F1.png&w=1080&q=75" className="h-30 mx-auto my-auto" />
                         </div>
                         <div className="flex bg-white  text-2xl font-semibold text-black py-15 px-5 border-white">
                             Margherita Pizza
                         </div>
                         <div className="flex bg-white text-zinc-600 text-2xl font-thin py-15 px-5 border-white">
                              $12
                         </div>
                         <div className="flex bg-white text-black text-2xl  py-15 px-5 border-white">
                             {nit0}
                         </div>
                         <div className="flex bg-white  text-zinc-600 text-2xl font-thin py-15 px-5 border-white">
                             ${amt0}
                         </div>
                         
                </div>
                
                <div className={`flex flex-row mx-auto   ${it1 ==1 ? "block" : "hidden"} border-1 justify-around w-full border-zinc-400`}>
                                  <div className="flex bg-white  ">
                             <img src="https://img.icons8.com/?size=100&id=59754&format=png&color=FA5252" className="h-10 mx-auto my-auto"/>
                         </div>
                         <div className="flex bg-white ">
                             <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F2.png&w=1080&q=75" className="h-30 mx-auto my-auto" />
                         </div>
                         <div className="flex bg-white  text-2xl font-semibold text-black py-15 px-5">
                             Burger
                         </div>
                         <div className="flex bg-white  text-zinc-600 text-2xl font-thin py-15 px-5">
                              $8
                         </div>
                         <div className="flex bg-white  text-black text-2xl  py-15 px-5">
                             {nit1}
                         </div>
                         <div className="flex bg-white  text-zinc-600 text-2xl font-thin py-15 px-5">
                             ${amt1}
                         </div>
                         
                </div>
                
                <div className={`flex flex-row mx-auto   ${it2 ==1 ? "block" : "hidden"} border-1  justify-around w-full border-zinc-400`}>
                                  <div className="flex bg-white  ">
                             <img src="https://img.icons8.com/?size=100&id=59754&format=png&color=FA5252" className="h-10 mx-auto my-auto"/>
                         </div>
                         <div className="flex bg-white ">
                             <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F3.png&w=1080&q=75" className="h-30 mx-auto my-auto" />
                         </div>
                         <div className="flex bg-white  text-2xl font-semibold text-black py-15 px-5">
                             Grilled Stake
                         </div>
                         <div className="flex bg-white  text-zinc-600 text-2xl font-thin py-15 px-5">
                              $14
                         </div>
                         <div className="flex bg-white  text-black text-2xl  py-15 px-5">
                             {nit2}
                         </div>
                         <div className="flex bg-white  text-zinc-600 text-2xl font-thin py-15 px-5">
                             ${amt2}
                         </div>
                         
                </div>
                
                <div className={`flex flex-row mx-auto   ${it3 ==1 ? "block" : "hidden"} border-1  justify-around w-full border-zinc-400 `}>
                                  <div className="flex bg-white  ">
                             <img src="https://img.icons8.com/?size=100&id=59754&format=png&color=FA5252" className="h-10 mx-auto my-auto"/>
                         </div>
                         <div className="flex bg-white ">
                             <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F5.png&w=1080&q=75" className="h-30 mx-auto my-auto" />
                         </div>
                         <div className="flex bg-white text-2xl font-semibold text-black py-15 px-5">
                             Barbecue Chicken
                         </div>
                         <div className="flex bg-white text-zinc-600 text-2xl font-thin py-15 px-5">
                              $8
                         </div>
                         <div className="flex bg-white text-black text-2xl  py-15 px-5">
                             {nit3}
                         </div>
                         <div className="flex bg-white  text-zinc-600 text-2xl font-thin py-15 px-5">
                             ${amt3}
                         </div>
                         
                </div>
                <div className={`flex flex-row mx-auto   ${it4 ==1 ? "block" : "hidden"}border-1 justify-around w-full border-zinc-400 border-1 border-zinc-400`}>
                                  <div className="flex bg-white ">
                             <img src="https://img.icons8.com/?size=100&id=59754&format=png&color=FA5252" className="h-10 mx-auto my-auto"/>
                         </div>
                         <div className="flex bg-white ">
                             <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F8.png&w=1080&q=75" className="h-30 mx-auto my-auto" />
                         </div>
                         <div className="flex bg-white text-2xl font-semibold text-black py-15 px-5">
                             Vegetable Roll
                         </div>
                         <div className="flex bg-white  text-zinc-600 text-2xl font-thin py-15 px-5">
                              $25
                         </div>
                         <div className="flex bg-white  text-black text-2xl  py-15 px-5">
                             {nit4}
                         </div>
                         <div className="flex bg-white  text-zinc-600 text-2xl font-thin py-15 px-5">
                             ${amt4}
                         </div>
                         
                </div>
                
                <div className={`flex flex-row mx-auto   ${it5 ==1 ? "block" : "hidden"} border-1 justify-around w-full border-zinc-400`}>
                                  <div className="flex bg-white ">
                             <img src="https://img.icons8.com/?size=100&id=59754&format=png&color=FA5252" className="h-10 mx-auto my-auto"/>
                         </div>
                         <div className="flex bg-white ">
                             <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F6.png&w=1080&q=75" className="h-30 mx-auto my-auto" />
                         </div>
                         <div className="flex bg-white  text-2xl font-semibold text-black py-15 px-5">
                             Creamy Pasta
                         </div>
                         <div className="flex bg-white  text-zinc-600 text-2xl font-thin py-15 px-5">
                              $18
                         </div>
                         <div className="flex bg-white  text-black text-2xl  py-15 px-5">
                             {nit5}
                         </div>
                         <div className="flex bg-white  text-zinc-600 text-2xl font-thin py-15 px-5">
                             ${amt5}
                         </div>
                         
                </div>
                
                <div className={`flex flex-row mx-auto   ${it6 ==1 ? "block" : "hidden"} border-1 justify-around w-full border-zinc-400`}>
                                  <div className="flex bg-white  ">
                             <img src="https://img.icons8.com/?size=100&id=59754&format=png&color=FA5252" className="h-10 mx-auto my-auto"/>
                         </div>
                         <div className="flex bg-white ">
                             <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F7.png&w=1080&q=75" className="h-30 mx-auto my-auto" />
                         </div>
                         <div className="flex bg-white  text-2xl font-semibold text-black py-15 px-5">
                             Chicken Shawarma
                         </div>
                         <div className="flex bg-white  text-zinc-600 text-2xl font-thin py-15 px-5">
                              $3
                         </div>
                         <div className="flex bg-white  text-black text-2xl  py-15 px-5">
                             {nit6}
                         </div>
                         <div className="flex bg-white  text-zinc-600 text-2xl font-thin py-15 px-5">
                             ${amt6}
                         </div>
                         
                </div>
                
                <div className={`flex flex-row mx-auto   ${it7 ==1 ? "block" : "hidden"} border-1 border-zinc-400 justify-around w-full`}>
                                  <div className="flex bg-white  ">
                             <img src="https://img.icons8.com/?size=100&id=59754&format=png&color=FA5252" className="h-10 mx-auto my-auto"/>
                         </div>
                         <div className="flex bg-white ">
                             <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F4.png&w=1080&q=75" className="h-30 mx-auto my-auto" />
                         </div>
                         <div className="flex bg-white text-2xl font-semibold text-black py-15 px-5">
                             Submarine Sandwich
                         </div>
                         <div className="flex bg-white text-zinc-600 text-2xl font-thin py-15 px-5">
                              $6
                         </div>
                         <div className="flex bg-white  text-black text-2xl  py-15 px-5">
                             {nit7}
                         </div>
                         <div className="flex bg-white  text-zinc-600 text-2xl font-thin py-15 px-5">
                             ${amt7}
                         </div>
                         
                </div>
                <div className="flex flex-row justify-between px-10 bg-white py-4 border-1 border-zinc-400 " >
                    <div className="gap-9 flex">
                             <button  className="bg-white border-black border-1 justify-center items-center flex font-semibold rounded-xl h-10 w-40 text-zinc-800  ">Coupon Code </button>
                              <button className="bg-red-950 h-10 w-40 rounded-xl flex justify-center items-center font-semibold text-white ">Apply Coupon </button>
                    </div>
                    <div>
                                 <button className="bg-red-950 h-10 w-40 rounded-xl font-semibold text-white ">Checkout</button>
                    </div>

                </div>

                {famt}
   </div>
    
    <div className="md:flex md:flex-col hidden font-[Marcellus] text-4xl text-black font-bold bg-white py-10 px-45  md:pb-40">
            Cart Totals
    
    
    <div className="flex flex-row h-20 mt-10 ">
        <div className="text-lg font-[Marcellus] pl-5 w-50 pr-15 border-1 border-zinc-400 pt-5"> 
            Subtotal
        </div>
        <div className="text-lg font-[Marcellus] border-1 border-zinc-400 w-90 pt-5  pl-5">
            ${famt}
        </div>
    </div>
    <div className="flex flex-row h-40" >
        <div className="text-lg font-[Marcellus] pl-5  w-50 pr-15 border-1 border-zinc-400 pt-5">
            Shipping
        </div>
        <div className="text-lg font-[Marcellus] pl-5  w-90 pr-15 border-1 border-zinc-400 pt-5">
                    Free shipping<br/>

Shipping to Australia.<br/>

   <b>    Change address     </b>

        </div>
    </div>
    <div className="flex flex-row h-20 ">
        <div className="text-lg font-[Marcellus] pl-5 w-50  pr-15 border-1 border-zinc-400 pt-5">
            Total
        </div>
        <div className="text-lg font-[Marcellus] w-90 border-1 border-zinc-400 pt-5 pl-5"> 
        ${famt}
        </div>
    </div>
    </div>
    <Footer/>
    <Returntop destination="cart"/>
    </>)
}