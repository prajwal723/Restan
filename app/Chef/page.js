"use client";
import ChefComp from "../Acomponent/ChefComp/page";
import Navbar from "../pcomponent/navbar";
import Herosection from "../pcomponent/herosection";
import Footer from "../Acomponent/Footer/page";
import Returntop from "../pcomponent/return-top/page";

export default function Chef(){
    return(
        <> 
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');
                </style>


         <div className="md:hidden">
                 <Navbar/>
            <Herosection title={"Restaurant Chef"} />
          <div className="bg-white dark:bg-neutral-900">
              <div className="font-[Marcellus] text-lg text-[#826a45] font-bold flex justify-center pt-5 pb-5">
                MASTER CHEFS 
            </div>
            <div className="font-[Marcellus] text-4xl ml-6 text-black font-bold dark:text-white">
                Meet Our Special 
            </div>
            <div className="font-[Marcellus] text-4xl ml-26 text-black font-bold pb-5 dark:text-white">
                Chefs
            </div>
            <div className="grid grid-col-1 xl-grid-col-3 text-white space-y-5 py-6">
            <ChefComp imagee={"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=828&q=75"} namee={"Alexander Petllo"} role={"ASSISTANT CHEF"} />
            <ChefComp imagee={"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F2.jpg&w=828&q=75"} namee={"Mendia Juxef"} role={"BURGER KING"} />
             <ChefComp imagee={"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F3.jpg&w=828&q=75"} namee={"Petro William"} role={"MAIN CHEF"} />
            <ChefComp imagee={"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F4.jpg&w=828&q=75"} namee={"Alexander Petllo"} role={"ASSISTANT CHEF"} />
            <ChefComp imagee={"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F5.jpg&w=828&q=75"} namee={"Mendia Juxef"} role={"BURGER KING"} />
            <ChefComp imagee={"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=828&q=75"} namee={"Petro William"} role={"MAIN CHEF"} />
                    
            </div>
          </div>
          <Footer/>
        </div>
           
        <div className="hidden md:flex  flex-col bg-sky-50 dark:bg-neutral-900">
           <div> <Navbar/></div>  
             <div><Herosection title={"Restaurant Chef"} />
             </div>

            <div className="flex flex-row justify-center pt-15 items-center">
                    <div>
                                <img src="https://restan-nextjs.vercel.app/_next/static/media/17.088ee553.png" />
                    </div>
                    <div className="font-[Marcellus] text-2xl text-[#826a45] font-bold px-4">
                        MASTER CHEFS

                    </div>
                    <div>
                            <img src="https://restan-nextjs.vercel.app/_next/static/media/18.5979b905.png" />                       
                    </div>

            </div>
                    <div className="font-[Marcellus] text-6xl text-black font-bold dark:text-white flex justify-center pt-10 pb-20">
                        Meet Our Special Chefs
                    </div>

                    <div className="flex flex-row gap-36 mx-32">

                     <div className="h-80 w-80 rounded-full border-2 border-zinc-600 relative z-10 ">
                      <div className="h-74 w-74 rounded-full border-0  overflow-hidden relative z-20 ml-[8px] mt-[8px]">
                      <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=828&q=75" className="w-full h-full object-cover  "/>
                      </div>
                      <div className="bg-[#826a45] w-90 h-18 relative z-30 mt-[-70px] ml-[-25px] font-[Marcellus] flex flex-col justify-center  text-white ">
                      <div className="text-center text-2xl ">
                        Alexander Petllo
                      </div>
                     <div className="text-center text-xl">
                        ASSISTANT CHEF
                     </div>
                      </div>
                      </div>


            
  <div className="h-80 w-80 rounded-full border-2 border-zinc-600 relative z-10 ">
                      <div className="h-74 w-74 rounded-full border-0  overflow-hidden relative z-20 ml-[8px] mt-[8px]">
                      <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F2.jpg&w=828&q=75" className="w-full h-full object-cover  "/>
                      </div>
                      <div className="bg-[#826a45] w-90 h-18 relative z-30 mt-[-70px] ml-[-25px] font-[Marcellus] flex flex-col justify-center text-white ">
                      <div className="text-center text-2xl ">
                        Mendia Juxef
                      </div>
                     <div className="text-center text-xl">
                        BURGER KING
                     </div>
                      </div>
                      </div>
                   



            <div className="h-80 w-80 rounded-full border-2 border-zinc-600 relative z-10 ">
                      <div className="h-74 w-74 rounded-full border-0  overflow-hidden relative z-20 ml-[8px] mt-[8px]">
                      <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F2.jpg&w=828&q=75" className="w-full h-full object-cover  "/>
                      </div>
                      <div className="bg-[#826a45] w-90 h-18 relative z-30 mt-[-70px] ml-[-25px] font-[Marcellus] flex flex-col justify-center  text-white">
                      <div className="text-center text-2xl ">
                        Petro William
                      </div>
                     <div className="text-center text-xl">
                        MAIN CHIEF
                     </div>
                      </div>
                      </div>
                        
                    </div>


                    <div className="flex flex-row w-1 mt-20 mb-20 pb-20 gap-36 mx-32">

                     <div className="h-80 w-80 rounded-full border-2 border-zinc-600 relative z-10 ">
                      <div className="h-74 w-74 rounded-full border-0  overflow-hidden relative z-20 ml-[8px] mt-[8px]">
                      <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=828&q=75" className="w-full h-full object-cover  "/>
                      </div>
                      <div className="bg-[#826a45] w-90 h-18 relative z-30 mt-[-70px] ml-[-25px] font-[Marcellus] flex flex-col justify-center  text-white">
                      <div className="text-center text-2xl ">
                        Alexander Petllo
                      </div>
                     <div className="text-center text-xl">
                        ASSISTANT CHEF
                     </div>
                      </div>
                      </div>


            
  <div className="h-80 w-80 rounded-full border-2 border-zinc-600 relative z-10 ">
                      <div className="h-74 w-74 rounded-full border-0  overflow-hidden relative z-20 ml-[8px] mt-[8px]">
                      <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F2.jpg&w=828&q=75" className="w-full h-full object-cover  "/>
                      </div>
                      <div className="bg-[#826a45] w-90 h-18 relative z-30 mt-[-70px] ml-[-25px] font-[Marcellus] flex flex-col justify-center  text-white">
                      <div className="text-center text-2xl ">
                        Mendia Juxef
                      </div>
                     <div className="text-center text-xl">
                        BURGER KING
                     </div>
                      </div>
                      </div>
                   



            <div className="h-80 w-80 rounded-full border-2 border-zinc-600 relative z-10 ">
                      <div className="h-74 w-74 rounded-full border-0  overflow-hidden relative z-20 ml-[8px] mt-[8px]">
                      <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F2.jpg&w=828&q=75" className="w-full h-full object-cover  "/>
                      </div>
                      <div className="bg-[#826a45] w-90 h-18 relative z-30 mt-[-70px] ml-[-25px] font-[Marcellus] flex flex-col justify-center text-white ">
                      <div className="text-center text-2xl ">
                        Petro William
                      </div>
                     <div className="text-center text-xl">
                        MAIN CHIEF
                     </div>
                      </div>
                      </div>

                  
                        
                    </div>

        <Footer/>
        <Returntop destination="/Chef"/>



       </div>   
        </>
    )
}