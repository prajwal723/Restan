import Navbar from "../pcomponent/navbar";
import Herosection from "../pcomponent/herosection";
import Footer from "../Acomponent/Footer/page";
import Returntop from "../pcomponent/return-top/page";
 
export default function Contact(){
    return<>
        <Navbar/>
        <Herosection title="Contact Us"/>
       <div className="bg-gray-200 py-10 md:py-16  dark:bg-neutral-900">
             <div className="space-y-5  m-2  md:space-y-0 md:flex md:justify-around">
                <Contactcontainer img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fphone.png&w=640&q=75" title="Hotline" contactdet="+4733378901"/>
                <Contactcontainer img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fplaceholder.png&w=640&q=75" title="Our Location" location="55 Main Street, The Grand Avenue 2nd Block, New York City"/>
                <Contactcontainer img="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Femail.png&w=640&q=75" title="Official Email" contactdet="info@restan.com"/>
             </div>

             <div className="bg-white py-10 mt-14  px-8 m-2 rounded-xl space-y-3 shadow-2xl shadow-gray-300 md:mx-20 md:px-24 md:py-14 dark:dark:bg-neutral-800 dark:shadow-none">
                <div className="flex  justify-center md:gap-3 items-center">
                    <img src="https://restan-nextjs.vercel.app/_next/static/media/17.088ee553.png" alt="line" className="hidden md:block h-4"/>
                    <h2 className="text-[#826a45] font-serif text-xl text-center font-medium">KEEP IN TOUCH</h2>
                    <img src="	https://restan-nextjs.vercel.app/_next/static/media/18.5979b905.png" alt="line" className="hidden md:block h-4"/>
                </div>
                <h1 className="text-black font-bold text-4xl md:text-5xl text-center dark:text-white mb-4">Send us a Message</h1>
                <form className="text-black space-y-4">
                    <input type="text" placeholder="Name" className="p-3 w-full bg-gray-200 rounded dark:bg-black/50 dark:text-neutral-400"/>
                    <div className="space-y-4 md:space-y-0 md:flex md:gap-3">
                        <input type="email" placeholder="Email*" className="p-3 w-full bg-gray-200 rounded dark:bg-black/50 dark:text-neutral-400"/>
                        <input type="tel" placeholder="Phone" className="p-3 w-full bg-gray-200 rounded dark:bg-black/50 dark:text-neutral-400"/>
                    </div>
                    <input type="text" placeholder="Your Message" className="p-3 w-full bg-gray-200 rounded pb-24 items-start dark:bg-black/50 dark:text-neutral-400"/>
                    <button type="submit" className="bg-[#826a45] text-white p-4 font-bold w-full rounded  md:w-fit md:px-14 ">Get In Touch</button>
                </form>
             </div>

             <div >
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48388.929990966964!2d-74.00332!3d40.711233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1653598669477!5m2!1sen!2sus" className="w-full h-screen py-14 md:py-14"/>
             </div>

             <div className="relative px-3 md:px-20 md:pt-10 md:pb-28">
                <div className="text-gray-300 text-9xl font-bold font-serif opacity-50 hidden md:block dark:opacity-5">RESTAN</div>
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

             <Returntop destination="/contact"/>

       </div>

         


        <section>
            <Footer/>
        </section>
    </>
}

function Contactcontainer({img,title,contactdet,location}){
    return<>
        <div className="space-y-3 items-center justify-items-center bg-white p-8 rounded-xl border-neutral-300 border md:w-90 dark:border-0   dark:bg-neutral-700/50">
            <img src={img} alt={contactdet} className="h-15"/>
            <h1 className="font-semibold text-2xl text-black dark:text-white">{title}</h1>
            <h2 className="font-semibold text-md text-black dark:text-white">{contactdet}</h2>
            <h3 className="text-neutral-500 text-center dark:text-neutral-400">{location}</h3>
        </div>
    </>
}