"use client";
import React from "react";
import { useState } from "react";
import Navbar from "./pcomponent/navbar";
import FoodMenu from "./pcomponent/menucontent";
import BlogContent from "./pcomponent/blogcontent";
import Footer from "./Acomponent/Footer/page";
import { useRouter } from "next/navigation";
import Booktable from "./pcomponent/booktable";
import CustomerReview from "./pcomponent/customerreview";
import Returntop from "./pcomponent/return-top/page";

export default function HomePage() {
  const [dishes, setdishes] = useState(1);
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="relative overflow-x-hidden bg-gray-100 dark:bg-neutral-900 pt-14 md:pt-28">
        <img
          src="/best-restaurant.png"
          alt="Best restaurant"
          className=" scale-200 md:scale-100"
        />
        <h1 className=" absolute top-16 md:top-56 md:text-7xl text-center font-bold text-4xl w-full text-white">
          Best Restaurant
        </h1>
        <div className="pt-24">
          <div className="flex  justify-center md:gap-3 items-center">
            <img
              src="	https://restan-nextjs.vercel.app/_next/static/media/17-2.f96247ed.png"
              alt="line"
              className="hidden md:block h-5"
            />
            <h2 className="text-red-500 font-serif text-xl md:text-3xl text-center font-medium ">
              CATEGORY
            </h2>
            <img
              src="https://restan-nextjs.vercel.app/_next/static/media/18-2.1e981c0c.png"
              alt="line"
              className="hidden md:block h-5"
            />
          </div>

          <h1 className="font-bold text-4xl text-black text-center md:text-6xl md:my-4 dark:text-white">
            Choose Your Best Food
          </h1>
          <div className="md:grid md:grid-cols-4 md:mx-14 ">
            <FoodMenu
              image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F1.jpg&w=1920&q=75"
              title="Pizza Slice"
              ratings="5.0"
            />
            <FoodMenu
              image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F2.jpg&w=1920&q=75"
              title="Cheese Burger"
              ratings="4.5"
            />
            <FoodMenu
              image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F3.jpg&w=1920&q=75"
              title="Chicken Masala"
              ratings="4.8"
            />
            <FoodMenu
              image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F4.jpg&w=1920&q=75"
              title="Vegetable Roll"
              ratings="4.2"
            />
          </div>
        </div>

        <div className="mt-8 m-3 md:flex md:flex-row md:justify-around">
          <div className="relative mb-20 md:mb-0 justify-items-center-safe">
            <div className="bg-red-700 md:m-16 rounded-full">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2Fchef.png&w=2048&q=75"
                alt="chef image"
                className="rounded-full"
              />
            </div>
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F7.png&w=1200&q=75"
              alt="bread"
              className="absolute hidden h-28 left-36 top-56 md:block md:top-100 md:h-56 md:left-85"
            />
            <img
              src="/cheflogo.png"
              alt="cheflogo"
              className="absolute top-52 h-36  rounded-full md:top-108 md:h-44 md:left-20"
            />
          </div>

          <div className="space-y-4 md:mt-24 md:w-6xl md:ml-16 md:space-y-7">
            <div className="flex gap-3 items-center">
              <p className="text-red-700 text-2xl font-medium md:text-3xl">
                About us
              </p>
              <img
                src="https://restan-nextjs.vercel.app/_next/static/media/18-2.1e981c0c.png"
                className="h-3"
              />
            </div>
            <p className="text-black text-4xl font-semibold md:text-6xl dark:text-white">
              Come for our fresh, delicious food you won’t forget.
            </p>
            <p className="text-gray-700 md:text-xl dark:text-neutral-500">
              A relaxing and pleasant atmosphere, good jazz, dinner, and
              cocktails. The Patio Time Bar opens in the center of Florence. The
              only bar inspired by the 1960s, it will give you a experience that
              you’ll have a hard time forgetting.
            </p>
            <div className="md:flex md:gap-8">
              <div>
                <button
                  className="bg-red-700 text-white py-4 px-5 rounded-4xl md:text-2xl"
                  onClick={() => router.push("/chefdetails")}
                >
                  Discover More
                </button>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fsigneture.png&w=828&q=75"
                  className="h-10 dark:px-3  dark:invert"
                />
                <p className="text-gray-700 md:text-xl dark:text-neutral-500">
                  CEO, of Restan Restaurant
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 relative">
          <div className="md:flex  bg-stone-200 dark:bg-neutral-800 ">
            <div className="bg-black  py-12 p-3 justify-start space-y-3 md:py-28 md:p-14 md:space-y-5  md:px-20">
              <img
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F2.png&w=1080&q=75"
                alt="plate"
                className="absolute h-44 top-0 left-0 hidden md:block"
              />
              <div className="flex items-center gap-3">
                <h1 className="text-white font-medium md:text-lg">FOOD MENU</h1>
                <img
                  src="https://restan-nextjs.vercel.app/_next/static/media/18-2.1e981c0c.png"
                  className="h-3"
                />
              </div>
              <h2 className="text-white text-4xl my-5 font-semibold md:text-5xl">
                Our Specials Menu
              </h2>
              <button
                className={`p-4 w-full border text-white justify-between flex border-gray-300 rounded-lg ${
                  dishes == 1 ? "bg-red-700" : "null"
                } md:text-xl`}
                onClick={() => {
                  setdishes(1);
                }}
              >
                MAIN DISHES
                <img
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F9.png&w=64&q=75"
                  alt="icon"
                  className="h-4 md:h-5"
                />
              </button>
              <button
                className={`p-4 w-full border text-white justify-between flex border-gray-300 rounded-lg ${
                  dishes == 2 ? "bg-red-700" : "null"
                } md:text-xl`}
                onClick={() => {
                  setdishes(2);
                }}
              >
                DESSERTS
                <img
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F10.png&w=64&q=75"
                  alt="icon"
                  className="h-4 md:h-5"
                />
              </button>
              <button
                className={`p-4 w-full border text-white justify-between flex border-gray-300 rounded-lg ${
                  dishes == 3 ? "bg-red-700" : "null"
                } md:text-xl`}
                onClick={() => {
                  setdishes(3);
                }}
              >
                SEA FOOD
                <img
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F11.png&w=64&q=75"
                  alt="icon"
                  className="h-4 md:h-5"
                />
              </button>
              <button
                className={`p-4 w-full border text-white justify-between flex border-gray-300 rounded-lg ${
                  dishes == 4 ? "bg-red-700" : "null"
                } md:text-xl`}
                onClick={() => {
                  setdishes(4);
                }}
              >
                BEVERAGE
                <img
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F12.png&w=64&q=75"
                  alt="icon"
                  className="h-4 md:h-5"
                />
              </button>
            </div>

            {dishes == 1 ? <Dish1 /> : null}
            {dishes == 2 ? <Dish2 /> : null}
            {dishes == 3 ? <Dish3 /> : null}
            {dishes == 4 ? <Dish4 /> : null}
          </div>
        </div>

        <div className="justify-items-center-safe   m-3 space-y-7">
          <div>
            <p className="text-red-700 text-center mb-1 font-semibold text-xl md:text-2xl">
              FOOD ITEM
            </p>
            <p className="text-black text-center font-semibold text-3xl md:text-6xl dark:text-white">
              Our Food Gallery
            </p>
          </div>
          <div className="md:flex space-y-7 md:gap-7 p-1 md:p-10">
            <div className="space-y-7 md:w-100">
              <Foodgallery
                img="https://restan-nextjs.vercel.app/assets/img/portfolio/1.jpg"
                title="MINION DRINKS"
                desc="Cold Lemmon Juice"
              />
              {/* <img src="https://restan-nextjs.vercel.app/assets/img/portfolio/1.jpg" alt="item" className="md:w-92.5" /> */}
            </div>
            <div className="space-y-7 md:w-100 ">
              <Foodgallery
                img="https://restan-nextjs.vercel.app/assets/img/portfolio/2.jpg"
                title="GRILL CHICKEN"
                desc="Chicken Sandwich"
              />
              <Foodgallery
                img="https://restan-nextjs.vercel.app/assets/img/portfolio/6.jpg"
                title="CHEESY FAVORITE"
                desc="Crispy Crust Pizzeria"
              />
              {/* <img src="https://restan-nextjs.vercel.app/assets/img/portfolio/2.jpg" alt="item" className="md:w-107.5"/>
                    <img src="https://restan-nextjs.vercel.app/assets/img/portfolio/3.jpg" alt="item" className="md:w-107.5"/> */}
            </div>
            <div className="space-y-7 md:w-100 ">
              <Foodgallery
                img="https://restan-nextjs.vercel.app/assets/img/portfolio/3.jpg"
                title="CHEESY FAVORITE"
                desc="Salmon Steak"
              />
              <Foodgallery
                img="https://restan-nextjs.vercel.app/assets/img/portfolio/5.jpg"
                title="GRILL CHICKEN"
                desc="Chicken Sandwich"
              />
              {/* <img src="https://restan-nextjs.vercel.app/assets/img/portfolio/6.jpg" alt="item" className="md:w-80.5"/>
                    <img src="https://restan-nextjs.vercel.app/assets/img/portfolio/5.jpg" alt="item" className="md:w-80.5"/> */}
            </div>
          </div>
        </div>

        <section>
          <CustomerReview />
        </section>

        <section>
          <Booktable />
        </section>

        <div className="mt-14 justify-items-center space-y-3 md:mb-40">
          <h1 className="text-xl text-red-700 font-serif font-medium md:text-2xl">
            NEWS & BLOG
          </h1>
          <h2 className="text-3xl text-black text-center font-semibold md:text-5xl dark:text-white">
            Our Latest News & Blog
          </h2>
          <BlogContent
            image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=3840&q=75"
            title="Picked up a Brussels burger Sprouts."
          />
          <BlogContent
            image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2-full.jpg&w=3840&q=75"
            title="This prefabricated passive house highly"
          />
        </div>

        <Footer />
        <Returntop destination="/" />
      </div>
    </>
  );
}

function Dishes({ img, title, price1, price2, desc }) {
  return (
    <>
      <div className="my-2 md:my-3">
        <div className="pt-5 mx-3 flex md:gap-7 md:items-center md:mx-0 ">
          <img
            src={img}
            alt={title}
            className=" md:h-24 rounded-full hidden md:block"
          />
          <div className="md:space-y-4 w-full md:pt-1">
            <div className="mb-2 flex justify-between">
              <div className="text-black font-semibold text-xl dark:text-white">
                {title}
              </div>
              <div className="text-red-700 font-semibold text-xl">
                {price1} - {price2}
              </div>
            </div>
            <p className="text-gray-700 dark:text-neutral-400">{desc}</p>
            <p className="text-gray-700 dark:text-neutral-400">Free Drinks</p>
            <hr className="border mt-5 border-gray-300 dark:border-neutral-600" />
          </div>
        </div>
      </div>
    </>
  );
}

function Dish1() {
  return (
    <>
      <div className="md:w-1/2 md:pl-24 ">
        <Dishes
          img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F1.jpg&w=640&q=75"
          title="Chicken Alfredo"
          price1="$20"
          price2="$40"
          desc="Ricotta / goat cheese / beetroot"
        />
        <Dishes
          img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F2.jpg&w=640&q=75"
          title="Fish Chips"
          price1="$36"
          price2="$70"
          desc="Atlantic / chips / salad / tartare"
        />
        <Dishes
          img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F3.jpg&w=640&q=75"
          title="Ebony Fillet Steak"
          price1="$44"
          price2="$85"
          desc="Truffle mash / pepper sauce"
        />
        <Dishes
          img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F4.jpg&w=640&q=75"
          title="Chicken Grill"
          price1="$20"
          price2="$40"
          desc="Ricotta / goat cheese / beetroot"
        />
      </div>
    </>
  );
}

function Dish2() {
  return (
    <>
      <div className="md:w-1/2 md:pl-24 ">
        <Dishes
          img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F5.jpg&w=256&q=75"
          title="Cupcakes"
          price1="$10"
          price2="$20"
          desc="Ricotta / goat cheese / beetroot"
        />
        <Dishes
          img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F6.jpg&w=256&q=75"
          title="Brownies"
          price1="$16"
          price2="$30"
          desc="Atlantic / chips / salad / tartare"
        />
        <Dishes
          img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F7.jpg&w=256&q=75"
          title="Muffins"
          price1="$22"
          price2="$40"
          desc="Truffle mash / pepper sauce"
        />
        <Dishes
          img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F8.jpg&w=256&q=75"
          title="Cheesecakes"
          price1="$34"
          price2="$65"
          desc="Ricotta / goat cheese / beetroot"
        />
      </div>
    </>
  );
}

function Dish3() {
  return (
    <>
      <div className="md:w-1/2 md:pl-24 ">
        <Dishes
          img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F9.jpg&w=256&q=75"
          title="Salmon Fry"
          price1="$40"
          price2="$80"
          desc="Ricotta / goat cheese / beetroot"
        />
        <Dishes
          img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F10.jpg&w=256&q=75"
          title="Pangasius or Basa"
          price1="$16"
          price2="$30"
          desc="Atlantic / chips / salad / tartare"
        />
        <Dishes
          img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F11.jpg&w=256&q=75"
          title="Clams"
          price1="$45"
          price2="$90"
          desc="Truffle mash / pepper sauce"
        />
        <Dishes
          img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F12.jpg&w=256&q=75"
          title="Red Crab"
          price1="$20"
          price2="$40"
          desc="Ricotta / goat cheese / beetroot"
        />
      </div>
    </>
  );
}

function Dish4() {
  return (
    <>
      <div className="md:w-1/2 md:pl-24 ">
        <Dishes
          img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F13.jpg&w=256&q=75"
          title="Wine"
          price1="$34"
          price2="$65"
          desc="Ricotta / goat cheese / beetroot"
        />
        <Dishes
          img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F14.jpg&w=256&q=75"
          title="Coffee"
          price1="$45"
          price2="$90"
          desc="Atlantic / chips / salad / tartare"
        />
        <Dishes
          img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F15.jpg&w=256&q=75"
          title="Hot chocolate"
          price1="$44"
          price2="$85"
          desc="Truffle mash / pepper sauce"
        />
        <Dishes
          img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F16.jpg&w=256&q=75"
          title="Milk Shake"
          price1="$20"
          price2="$40"
          desc="Ricotta / goat cheese / beetroot"
        />
      </div>
    </>
  );
}

function Foodgallery({ img, title, desc }) {
  return (
    <>
      <div className="relative  group overflow-hidden">
        <img src={img} alt={title} className=" group-hover:scale-110" />
        <div className="absolute group-hover:opacity-100 opacity-0 bg-black/60 w-full h-full top-0 left-0   text-white space-y-3">
          <div className="absolute bottom-12 left-10 border-b-2 border-l-2 pb-8 pl-8 pt-52 border-red-700">
            <h2 className="text-lg">{title}</h2>
            <h1 className="text-3xl font-bold">{desc}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
