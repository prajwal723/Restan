 export default function Video(){
    return<>
        <div className="relative px-3 md:px-20 md:pt-10 md:pb-28">
                <div className="text-gray-300 text-9xl font-bold font-serif opacity-55 hidden md:block dark:opacity-5">RESTAN</div>
                <iframe  src="https://www.youtube.com/embed/F3zw1Gvn4Mk?autoplay=1&mute=1&loop=1&playlist=F3zw1Gvn4Mk&controls=0" title="Mr Fox Restaurant Promo Video" className="w-full md:h-120 md:w-1/2"></iframe>
                <div className="bg-white shadow-md shadow-gray-300 md:w-3xl  space-y-6 px-5 py-9 md:px-17 md:py-24 md:absolute md:top-14 md:right-15 dark:dark:bg-neutral-800 dark:shadow-none ">
                    <h1 className="text-black font-semibold text-3xl dark:text-white">Opening Hours</h1>
                    <p className="text-neutral-500 text-sm dark:text-neutral-400">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center.</p>
                    <div className="text-neutral-900 font-semibold space-y-3 md:space-y-2 dark:text-white">
                        <div className="md:flex space-y-1 md:space-y-0 items-center gap-4">
                            <p>Sunday to Tuesday:</p>
                            <hr className="border-spacing-x-0.5 border-neutral-300 w-52 hidden md:block"/>
                            <p>10:00 - 09:00</p>
                        </div>
                        <div className="md:flex space-y-1 md:space-y-0 items-center gap-4">
                            <p>Wednesday to Thursday:</p>
                            <hr className="border-spacing-x-0.5 border-neutral-300 w-42.5 hidden md:block"/>
                            <p>11:30 - 10:30</p>
                        </div>
                        <div className="md:flex space-y-1 md:space-y-0 items-center gap-4">
                            <p>Friday & Saturday:</p>
                            <hr className="border-spacing-x-0.5 border-neutral-300 w-54 hidden md:block"/>
                            <p>10:30 - 12:00</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-[#826a45] rounded-full w-fit p-4">
                            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75" alt="phone" className="h-10"/>
                        </div>
                        <div className="space-y-1.5">
                            <p className="text-neutral-500 dark:text-neutral-400">Call Anytime</p>
                            <p className="text-xl font-semibold text-neutral-900 dark:text-white">+964733-378901</p>
                        </div>
                    </div>
                </div>
             </div>
    </>
 }