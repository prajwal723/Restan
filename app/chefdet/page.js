import Navbar from "../pcomponent/navbar";
import Herosection from "../pcomponent/herosection";
import Footer from "../Acomponent/Footer/page";
import Returntop from "../pcomponent/return-top/page";

export default function chefdet(){
    return<>
        <Navbar/>
        <Herosection title="Chef Details"/>
        <div className="bg-gray-200 md:flex md:px-24 md:pt-24 md:gap-20 dark:bg-neutral-900">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=1920&q=75" alt="chef" className="rounded-4xl p-3 md:h-140 md:absolute"/>
            <div className="px-3 space-y-6 pt-5 pb-10 md:space-y-10 md:py-10 md:pl-165">
                <h1 className="text-black font-semibold text-4xl pr-4 font-serif md:text-5xl dark:text-white">Alexander Petllo</h1>
                <p className="text-neutral-600 text-sm dark:text-neutral-400">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from.</p>
                <div className="space-y-3 md:space-y-6">
                    <div className="flex items-center text-neutral-600 gap-4 dark:text-neutral-400">
                        <img src="https://img.icons8.com/?size=100&id=7880&format=png&color=000000" className="h-6 dark:invert"/>
                        <p>175 10h Street, Office 375 Berlin, De 21562</p>
                    </div>
                    <div className="flex items-center text-neutral-950 gap-4 dark:text-neutral-300">
                        <img src="https://img.icons8.com/?size=100&id=86875&format=png&color=000000" className="h-6 dark:invert"/>
                        <p>alexander@digital.com</p>
                    </div>
                    <div className="flex items-center text-neutral-950 gap-4 dark:text-neutral-300">
                        <img src="https://img.icons8.com/?size=100&id=9730&format=png&color=000000" className="h-6 dark:invert"/>
                        <p>+44-20-7328-4499</p>
                    </div>
                </div>
                <div className="items-center flex gap-4 md:gap-6">
                    <button className="bg-[#826a45] flex p-3 rounded-4xl px-7 md:p-4 md:text-xl md:px-10">Contact Me</button>
                    <button className=" bg-black rounded-full flex p-2 ">
                        <img src="https://img.icons8.com/?size=100&id=kjiPmg9b1E7G&format=png&color=000000" className="h-6 invert md:h-8"/>
                    </button>
                </div>
            </div>

        </div>


        <div className="bg-white px-3 py-8 md:pt-32 md:px-24 md:pb-40 dark:bg-black">
            <div className="space-y-9 md:space-y-0 md:flex  md:justify-around">
                <div className="space-y-9 md:space-y-0 md:flex md:w-1/2 md:gap-20">
                <div className="space-y-5 ">
                    <h1 className="text-3xl  text-black font-semibold dark:text-white">Education</h1>
                    <div className="pl-5 space-y-2">
                        <h2 className="text-lg text-black font-semibold  dark:text-neutral-300">Residential College</h2>
                        <p className="text-neutral-900 text-sm dark:text-neutral-400">BA Honours - Biology</p>
                        <p className=" text-neutral-600 dark:text-neutral-400">2004 - 2008</p>
                    </div>
                    <div className="pl-5 space-y-2">
                        <h2 className="text-lg text-black font-semibold  dark:text-neutral-300">University of Iowa</h2>
                        <p className="text-neutral-900 text-sm dark:text-neutral-400">Master's degree - Macroeconomics</p>
                        <p className=" text-neutral-600 dark:text-neutral-400">2009 - 2012</p>
                    </div>
                </div>

                <div className="space-y-5">
                    <h1 className="text-3xl p-0 text-black font-semibold dark:text-white">Experience</h1>
                    <div className="pl-5 space-y-2">
                        <h2 className="text-lg text-black font-semibold  dark:text-neutral-300">Senior Chef</h2>
                        <p className="text-neutral-900 text-sm dark:text-neutral-400">Dubia Arab Hotel</p>
                        <p className=" text-neutral-600 dark:text-neutral-400">31 Aug, 2013</p>
                    </div>
                    <div className="pl-5 space-y-2">
                        <h2 className="text-lg text-black font-semibold  dark:text-neutral-300">Master of Restaurant</h2>
                        <p className="text-neutral-900 text-sm dark:text-neutral-400">Muskan Food Factory</p>
                        <p className=" text-neutral-600 dark:text-neutral-400">12 Dec 2018</p>
                    </div>
                </div>
                </div>

                <div  className="space-y-8 md:w-2/5">
                    <h1 className="text-3xl p-0 text-black font-semibold dark:text-white">Personal Skills</h1>
                     <div className="relative ">
                        <p className="text-black font-semibold absolute dark:text-neutral-300">Fast Food</p>
                        <div className="ml-[78%] md:ml-[83%]">
                            <button className="bg-black py px-1.5 relative  rounded-lg mb-2.5">88%
                            <div className="absolute top-5 left-3.5">
                                <img src="https://img.icons8.com/?size=100&id=93873&format=png&color=000000" className="h-3  w-3"/>
                            </div>
                            </button>
                        </div>
                        <hr className="w-[88%] border-3  border-[#826a45] rounded-2xl"/>
                    </div>

                     <div className="relative ">
                        <p className="text-black font-semibold absolute  dark:text-neutral-300">Sea Food</p>
                        <div className="ml-[85%] md:ml-[90%]">
                            <button className="bg-black py px-1.5 relative  rounded-lg mb-2.5">95%
                            <div className="absolute top-5 left-3.5">
                                <img src="https://img.icons8.com/?size=100&id=93873&format=png&color=000000" className="h-3  w-3"/>
                            </div>
                            </button>
                        </div>
                        <hr className="w-[95%] border-3 border-[#826a45] rounded-2xl"/>
                    </div>

                     <div className="relative ">
                        <p className="text-black font-semibold absolute dark:text-neutral-300">Drinks & Juice</p>
                        <div className="ml-[70%] md:ml-[75%]">
                            <button className="bg-black py px-1.5 relative  rounded-lg mb-2.5">80%
                            <div className="absolute top-5 left-3.5">
                                <img src="https://img.icons8.com/?size=100&id=93873&format=png&color=000000" className="h-3  w-3"/>
                            </div>
                            </button>
                        </div>
                        <hr className="w-[80%] border-3 border-[#826a45] rounded-2xl"/>
                    </div>

                </div>
            </div>

        </div>

        <Footer/>
        <Returntop destination="chefdet"/>
    </>
}
