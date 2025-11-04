export default function Register(){

    return(<>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');
                </style>
       
            <div className="bg-zinc-100 w-screen h-screen py-70">

            <div className="w-full px-20 flex flex-row  border-0 ">
                <div className="w-1/2">
                  
                    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=1920&q=75" className="rounded-l-xl shadow-xl/40"/>
                </div>
               <div className="bg-white w-1/2 pt-15 pl-15 flex flex-col gap-5 rounded-r-xl shadow-xl/30">
                        <div className="font-[Marcellus]  text-2xl bg-gradient-to-r from-emerald-900 via-yellow-600 to-lime-400 text-transparent bg-clip-text font-semibold">
                            Welcome back
                        </div>
                         <div className=" font-[Marcellus] text-gray-400">
                            Enter your email and password to continue
                        </div>
                        <input type="email" className="bg-sky-200 h-10 w-120  border-0 rounded-lg font-[Marcellus] text-gray-950 px-10" placeholder="Email*"/>
                        
                        <input type="password" className="bg-sky-200 h-10 w-120  border-0 rounded-lg font-[Marcellus] text-gray-950 px-10" placeholder="Password*"/>
                         <input type="password" className="bg-sky-200 h-10 w-120  border-0 rounded-lg font-[Marcellus] text-gray-950 px-10" placeholder="Confirm Password*"/>

                        <button className="bg-green-700 h-10 w-120  border-0 rounded-lg  text-white">LOGIN</button>

                        
                        
                        
                        
                         <div className="font-[Marcellus] text-2xl font-semibold text-black text-center">
                            Or Login With
                        </div>
                         <div className="flex flex-row ">
                            
                            <div className="flex flex-row bg-white w-50 mx-6 text-black font-semibold pl-5 h-13 border-1 rounded-lg border-blue-200">
                                    <div><img src="https://img.icons8.com/?size=100&id=go8tkRsylXuu&format=png&color=FA5252" className="w-13 h-13"/></div>
                                    <div className="pt-3 pl-3 text-lg">Google</div>
                            </div>

                            <div className="flex flex-row bg-white w-50 mx-6 text-black font-semibold pl-5 h-13 border-1 rounded-lg border-blue-200">
                                    <div><img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" className="w-13 h-13"/></div>
                                    <div className="pt-3 pl-3 text-lg">Facebook</div>
                            </div>

                        </div>
                         <div className="text-center font-[Marcellus]">
                            <span className="text-gray-400"> Don't have any account?</span> <span className="text-red-600"><u>Register Now</u></span>
                        </div>
                </div>

                </div>
            </div>
            
                
            
    
    
    
    </>)
}