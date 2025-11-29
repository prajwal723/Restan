"use client";
import Navbar from "../pcomponent/navbar";
import Herosection from "../pcomponent/herosection";
import Footer from "../Acomponent/Footer/page";
import Returntop from "../pcomponent/return-top/page";

export default function reservation() {
  return (
    <>
      <Navbar />
      <Herosection title="Reservation" />

      <div className=" bg-gray-200 dark:bg-neutral-900 md:py-10">
        <div className="relative px-3 py-10 md:px-20  md:pt-10 md:pb-36  ">
          <div className="text-gray-300 text-9xl font-bold font-serif opacity-50 hidden md:block dark:opacity-5">
            RESTAN
          </div>
          <iframe
            src="https://www.youtube.com/embed/F3zw1Gvn4Mk?autoplay=1&mute=1&loop=1&playlist=F3zw1Gvn4Mk&controls=0"
            title="Mr Fox Restaurant Promo Video"
            className="w-full md:h-120 md:w-1/2"
          ></iframe>
          <div className="bg-gray-100 shadow-md shadow-gray-300 md:w-3xl  space-y-6 px-5 py-14 md:px-17  md:absolute md:top-14 md:right-15 dark:dark:bg-neutral-800 dark:shadow-none ">
            <h1 className="text-black font-semibold text-3xl md:text-5xl dark:text-white">
              Book A Table
            </h1>
            <form
              className="space-y-3 md:space-y-6"
              onSubmit={() => {
                alert("Table Booked!");
              }}
            >
              <input
                type="tel"
                placeholder="Phone Number"
                minLength={10}
                maxLength={10}
                required
                className="border dark:bg-gray-600 border-gray-300 p-2 rounded-md w-full md:p-3"
              />
              <div className="border-gray-300  border dark:bg-gray-600 p-2 rounded-md w-full md:p-3">
                <select>
                  <option className="text-black">1 Person</option>
                  <option className="text-black">2 Person</option>
                  <option className="text-black">3 Person</option>
                  <option className="text-black">4 Person</option>
                  <option className="text-black">5 Person</option>
                </select>
              </div>
              <input
                type="date"
                placeholder="Date"
                required
                className="border dark:bg-gray-600 border-gray-300 p-2 text-white rounded-md w-full md:p-3"
              />
              <input
                type="time"
                placeholder="Time"
                required
                className="border dark:bg-gray-600 border-gray-300 p-2 rounded-md w-full md:p-3"
              />
              <button
                type="submit"
                className="text-white bg-red-800 p-3 rounded-xl px-6 md:p-4 md:text-lg"
              >
                Book A Table
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
      <Returntop destination="/reservation" />
    </>
  );
}
