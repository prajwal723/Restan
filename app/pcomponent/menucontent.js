"use client";
import { useState } from "react";

export default function FoodMenu({ image, title, ratings }) {
  return (
    <>
      <div className="bg-white dark:bg-neutral-800 mx-3 pb-8 mt-8 shadow-lg rounded-xl md:w-fit space-y-3 hover:scale-102 hover:border-b-red-700 hover:border-b-2">
        <img src={image} alt="food item" className="rounded-t-xl md:h-64" />
        <div className=" flex flex-row gap-16 my-7 items-center">
          <button className="border-l-[#826a45] border-l-4 relative text-gray-200  bg-gray-200 px-16 py-7 rounded-r-4xl dark:dark:bg-neutral-700 ">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F5.jpg&w=640&q=75"
              alt="image"
              className="absolute  rounded-full border-2 top-2 left-6 border-white h-10"
            />
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75"
              alt="image"
              className="absolute rounded-full border-2 top-2 left-13 border-white h-10"
            />
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F7.jpg&w=640&q=75"
              alt="image"
              className="absolute rounded-full border-2 top-2 left-20 border-white h-10"
            />
          </button>
          <div className="font-extrabold text-xl text-black dark:text-white">
            ⭐ {ratings}
          </div>
        </div>
        <h2 className="text-black font-semibold text-2xl px-7 hover:text-[#826a45] dark:text-white">
          {title}
        </h2>
        <p className=" text-gray-800 px-7 dark:text-neutral-500">
          Cheese, Ham & Pineapple
        </p>
        <button
          className="bg-[#826a45] p-3 mx-7 text-white px-7 rounded-4xl hover:bg-red-800 cursor-pointer  "
          onClick={() => alert("Unable to place the order")}
        >
          ORDER NOW
        </button>
      </div>
    </>
  );
}
