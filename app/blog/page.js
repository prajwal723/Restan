import Navbar from "../pcomponent/navbar";
import Herosection from "../pcomponent/herosection"; 
import BlogContent from "../pcomponent/blogcontent"; 
import Footer from "../Acomponent/Footer/page";  

export default function BlogPage() {
  return (
    <div className="bg-gray-200  overflow-x-hidden dark:bg-neutral-900">
     <div  className="md:pb-12">
      <Navbar />
      <Herosection title="Blog Standard"/>
      <BlogContent image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=3840&q=75" title="Picked up a Brussels burger Sprouts." />
      <BlogContent image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2-full.jpg&w=3840&q=75" title="This prefabricated passive house highly"/>
      <BlogContent image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=3840&q=75" title="Overcame breeding point concerns has."/>
      <BlogContent image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F4-full.jpg&w=3840&q=75" title="Breeding point has terminate the hole."/>
      <BlogContent image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F5-full.jpg&w=3840&q=75" title="Picked up a Brussels burger Sprouts ham"/>
     </div>
      <div className="mt-4 md:mt-0 md:mb-40 flex justify-center space-x-3 "> 
            <button className="bg-stone-400 dark:bg-stone-600 px-3.5 py-2 rounded-lg border border-gray-500 hover:bg-stone-500 hover:scale-105">1</button>
            <button className="bg-stone-400 dark:bg-stone-600 px-3.5 py-2 rounded-lg border border-gray-500 hover:bg-stone-500 hover:scale-105">2</button>
            <button className="bg-stone-400 dark:bg-stone-600 px-3.5 py-2 rounded-lg border border-gray-500 hover:bg-stone-500 hover:scale-105">3</button>
        </div>

      <Footer/>
    </div>
  );
}


