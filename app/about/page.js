import ChefComp from "../Acomponent/ChefComp/page"
import Footer from "../Acomponent/Footer/page"
import Navbar from "../pcomponent/navbar"
import Returntop from "../pcomponent/return-top/page"
import Video from "../pcomponent/video-openinghour"
import Herosection from "../pcomponent/herosection";

export default function about(){
     return(<>
     <Navbar/>
      <Herosection title="About Us"/>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');
        </style>
        <div className="lg:hidden bg-neutral-200 dark:bg-neutral-900">
            <div className="w-screen flex  bg-neutral-200  justify-center dark:bg-neutral-900">
               
                <span className="font-[Marcellus] text-[#826a45] text-lg font-bold  ">OUR TRUSTED 8K HAPPY PARTNER</span>
              
            </div>
            <div className="flex flex-row bg-neutral-200 justify-center gap-4 h-40 pt-5 dark:bg-neutral-900"> 
                      <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F3.png&w=1080&q=75" className="h-30 w-35"/>
                    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=1080&q=75" className="h-30 w-35"/>
            </div>
            <div className="h-1/3 w-screen bg-black">
                    <img src="https://restan-nextjs.vercel.app/assets/img/about/2.jpg" className="h-full"/>
            </div>
            <div className="mx-3">
                <div className="font-[Marcellus] text-[#826a45] text-lg font-bold my-3 bg-neutral-200 dark:bg-neutral-900">
                        About us
                </div>
                <div className="font-[Marcellus] text-black text-3xl font-normal mb-3 bg-neutral-200 dark:bg-neutral-900 dark:text-white">
                        We Invite You
                        To Visit Our Restaurant
                </div>
                <div className="text-neutral-500 text-sm mb-3 bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-400">
                    A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you'll have a hard time forgetting.A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you'll have a hard time forgetting.
                </div>
                <div className=" text-white font-normal text-sm px-5  w-40 ml-5 h-7 flex justify-center pb-8 pt-3 bg-yellow-700 ">
                        DISCOVER MORE
                </div>
            </div>
            <div>
                <div className="font-[Marcellus] text-lg text-[#826a45] font-bold flex justify-center pt-20 pb-5">
                MASTER CHEFS 
            </div>
            <div className="font-[Marcellus] text-3xl  text-black font-bold text-center dark:text-white">
                Meet Our Special Chefs
            </div>
                          <div className="ml-[-2px]">
                                 <ChefComp imagee={"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=828&q=75"} namee={"Alexander Petllo"} role={"ASSISTANT CHEF"} />
                                  <ChefComp imagee={"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F2.jpg&w=828&q=75"} namee={"Mendia Juxef"} role={"BURGER KING"} />
                                              <ChefComp imagee={"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F3.jpg&w=828&q=75"} namee={"Petro William"} role={"MAIN CHEF"} />
                          </div>
               
            </div>

                    <div className="flex flex-row justify-center pt-10">
                                       <iframe src="https://youtube.com/embed/F3zw1Gvn4Mk?autoplay=1&mute=1&controls=0&loop=1&playlist=F3zw1Gvn4Mk"/>

                    </div>
               <div className="m-3">
                           <div className="font-[Marcellus] text-3xl ml-6 text-black font-bold mt-8 mb-5 dark:text-white">
                                Opening Hours
                           </div>
                           <div className="text-neutral-500 text-sm mb-3 bg-neutral-200 mb-5 dark:bg-neutral-900 dark:text-neutral-100">
                            A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center..
                           </div>
                           <div className="text-black font-semibold mb-5 dark:text-white">
                                Sunday to Tuesday:<br/>
10:00 - 09:00
                           </div>
                           <div className="text-black font-semibold mb-5 dark:text-white">
                            Wednesday to Thursday:<br/>
11:30 - 10:30
                           </div>
                           <div className="text-black font-semibold dark:text-white" >
                            Friday & Saturday:<br/> 10:30 - 12:00
                           </div>
                </div>
                <div>

                    <div className="flex flex-row mt-10">

                    <div className="bg-green-500 border-0 rounded-full h-13 w-13 ">
                        <img src="https://img.icons8.com/?size=100&id=9729&format=png&color=FFFFFF" className="h-10 w-10 pl-2 pt-2"/>
                    </div>
                    <div>
                        <span className="text-gray-600 dark:text-neutral-300">Call Anytime</span><br/><span className="text-black font-semibold text-xl dark:text-white">+96 98762309389</span>
                    </div>
                    </div>
                </div>
            <Footer/>
            <Returntop destination="/about"/>
        </div>


        <div className="hidden lg:flex max-w-screen overflow-x-hidden">
           
           <div className="bg-neutral-200 overflow-x-hidden">
                     <div className="bg-gray-200 h-auto w-screen relative ">
                <img src="https://restan-nextjs.vercel.app/assets/img/shape/1.png" className="w-full h-full absolute z-0"/>
                <div className="flex flex-row justify-center items-center gap-2 pt-20">
                    <img src="https://restan-nextjs.vercel.app/_next/static/media/17.088ee553.png" className="h-3"/>
                <span className="font-[Marcellus] text-green-700 text-xl font-bold ">OUR TRUSTED 8K HAPPY PARTNER</span>
                <img src="https://restan-nextjs.vercel.app/_next/static/media/18.5979b905.png" className="h-3"/>
                </div>
            </div>

              <div className="flex flex-row  h-60 gap-15 justify-center pt-10">
                <div>
                        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F3.png&w=1080&q=75" className="h-30"/>            
                </div>
                <div>
                        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=1080&q=75" className="h-30"/>            
                </div>
                <div>
                        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F5.png&w=1080&q=75" className="h-30"/>            
                </div>
                <div>
                        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F2.png&w=1080&q=75" className="h-30"/>                           
                </div>

            </div>

            <div className="bg-teal-100 h-screen flex flex-row w-screen ">
                            <div className="h-2/3 my-auto">
                                <img src="https://restan-nextjs.vercel.app/assets/img/about/2.jpg" className="h-full"/>
<span className="invisible">   eee3e </span>
                             </div>
                             <div className="h-2/3 my-auto">
                                <img src="https://restan-nextjs.vercel.app/assets/img/about/3.jpg" className="h-full"/>

                             </div>
                             <div className="h-2/3 w-1/2 bg-white z-10 -ml-20 mr-20  mt-50 pl-10">
                                                       <div className="font-[Marcellus] text-green-700 text-2xl font-semibold my-3 ">
                                                 About us
                                         </div>
                                         <div className="font-[Marcellus] text-black text-6xl font-normal mb-3 text-black font-bold">
                                                 We Invite You<br/>
                                                 To Visit Our <br/> Restaurant
                                         </div>
                                         <div className="text-neutral-500 text-sm mb-3 ">
                                          A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you'll have a hard time forgetting.
                                         </div>
                                         <div className="bg-stone-500 text-white font-normal text-sm px-5  w-40 ml-5 h-7 flex justify-center pb-8 pt-3                          bg-yellow-700">
                                                 DISCOVER MORE
                                         </div>
            </div>
                                        
                             </div>

                             <div className="flex flex-row justify-center items-center gap-2 py-10">
                    <img src="https://restan-nextjs.vercel.app/_next/static/media/17.088ee553.png" className="h-3"/>
                <span className="font-[Marcellus] text-green-700 text-xl font-bold ">MASTER CHEFS</span>
                <img src="https://restan-nextjs.vercel.app/_next/static/media/18.5979b905.png" className="h-3"/>
                </div>
            <div className="font-[Marcellus] text-4xl text-center text-black font-bold pb-10">
                Meet Our Special Chefs
            </div>
                          <div className="pl-9 flex flex-row justify-evenly">
                                 <ChefComp imagee={"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=828&q=75"} namee={"Alexander Petllo"} role={"ASSISTANT CHEF"} />
                                  <ChefComp imagee={"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F2.jpg&w=828&q=75"} namee={"Mendia Juxef"} role={"BURGER KING"} />
                                              <ChefComp imagee={"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F3.jpg&w=828&q=75"} namee={"Petro William"} role={"MAIN CHEF"} />
                          </div>




            <section className="mb-10 ">

                <Video/>
            </section>
            
            <Footer/>
        </div>
                
              <Returntop destination="/about"/>


</div>
 </>)
}