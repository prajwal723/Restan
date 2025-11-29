export default function CustomerReview() {
  return (
    <>
      <div className=" p-3 relative space-y-3 md:bg-gray-300 py-14  md:py-28 md:mx-0 md:px-3 md:m-0  dark:bg-neutral-800 text-center md:text-start">
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F5.png&w=1920&q=75"
          className="h-32 top-16 absolute dark:invert opacity-35 hidden md:block"
        />
        <div className="flex  justify-center md:gap-3 items-center">
          <img
            src="	https://restan-nextjs.vercel.app/_next/static/media/17-2.f96247ed.png"
            alt="line"
            className="hidden md:block h-4"
          />
          <h2 className="text-red-500 font-serif text-xl md:text-2xl text-center font-medium ">
            HAPPY CUSTOMERS
          </h2>
          <img
            src="https://restan-nextjs.vercel.app/_next/static/media/18-2.1e981c0c.png"
            alt="line"
            className="hidden md:block h-4"
          />
        </div>
        <h1 className="font-bold text-4xl text-black text-center md:text-6xl dark:text-white md:mb-10">
          Our Customers Feedback
        </h1>
        <div className="md:flex md:flex-row md:justify-between md:mx-20">
          <div className="relative">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F4.jpg&w=640&q=75"
              alt="review"
              className="rounded-full my-5 h-72 shadow-md shadow-blue-200 md:h-96"
            />
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F5.jpg&w=640&q=75"
              alt="a"
              className="absolute rounded-full h-28 border-3 hidden md:block shadow-2xl border-white top-3 left-64"
            />
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75"
              alt="b"
              className="absolute rounded-full h-32 border-4 hidden md:block shadow-2xl border-white top-40 left-80"
            />
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F7.jpg&w=640&q=75"
              alt="c"
              className="absolute rounded-full h-28 border-3 hidden md:block shadow-2xl border-white top-80 left-64"
            />
          </div>
          <div className="md:w-1/2 md:mt-10 space-y-6">
            <p className="text-gray-700 md:text-2xl dark:text-neutral-500">
              ⭐⭐⭐⭐⭐ (5/5)
            </p>
            <h1 className="font-bold text-4xl text-black dark:text-white">
              The best food ever
            </h1>
            <p className="text-gray-700 md:text-xl dark:text-neutral-500">
              “Targeting consultation discover apartments. ndulgence off under
              folly death wrote cause her way spite. Plan upon yet way get cold
              spot its week. Almost do am or limits hearts. Resolve parties but
              why she shewing.”
            </p>

            <hr className=" border-black w-full dark:border-neutral-500" />

            <div>
              <p className="font-semibold font-serif text-2xl mb-2  text-black dark:text-white">
                Matthew J. Wyman
              </p>
              <p className="text-[#826a45] font-semibold">SENIOR CONSULTANT</p>
            </div>
            <div className="text-7xl text-red-700 text-center">....</div>
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F7.png&w=1920&q=75"
              className="h-28 bottom-10 right-2 absolute dark:invert opacity-35 hidden md:block"
            />
          </div>
        </div>
      </div>
    </>
  );
}
