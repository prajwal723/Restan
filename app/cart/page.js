"use client"
import { useState,useEffect} from "react";
import Navbar from "../pcomponent/navbar";
import Herosection from "../pcomponent/herosection";
import Footer from "../Acomponent/Footer/page";

export default function CartPage() {
    const [img,setimg]=useState(null);
    const [title,settitle]=useState(null);
    const [price,setprice]=useState(null);
    const [quantity,setquantity]=useState(null);
    const [cross,setcross]=useState(null);

    useEffect(() => {
        setimg(localStorage.getItem("img"));
        settitle(localStorage.getItem("title"));
        setprice(localStorage.getItem("price"));
        setquantity(localStorage.getItem("quantity"));
        setcross(localStorage.getItem("cross"));
    }, []);

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
                   <tr className=" text-center">
                        <td onClick={()=>localStorage.clear()}>{cross}</td>
                        <td className=" place-items-center-safe">
                            <img src={img} className="rounded-full h-20 "/>
                        </td>
                        <td>{title}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                   </tr>
                </tbody>
            </table>
            <Footer /></div>
        </>
    );
}
