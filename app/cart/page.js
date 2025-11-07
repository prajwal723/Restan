"use client"
import { useState,useEffect} from "react";
import Navbar from "../pcomponent/navbar";
import Herosection from "../pcomponent/herosection";
import Footer from "../Acomponent/Footer/page";

export default function CartPage() {

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
                        <td></td>
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
