"use client"
import Navbar from "../pcomponent/navbar";
import Herosection from "../pcomponent/herosection"; 
import BlogContent from "../pcomponent/blogcontent"; 
import Footer from "../Acomponent/Footer/page"; 
import { useState } from "react"; 

export default function BlogPage() {
  const [blog,setblog]=useState(1);

   

  return (
    <div className="bg-gray-200  overflow-x-hidden dark:bg-neutral-900">
     <div  className="md:pb-12">
      <Navbar />
      <Herosection title="Blog Standard"/>
      {blog==1?<Blog1/>:null}
      {blog==2?<Blog2/>:null}
      {blog==3?<Blog3/>:null}

     
     </div>
      <div className="mt-4 md:mt-0 md:mb-40 flex justify-center space-x-3 "> 
            <button className={` px-3.5 py-2 rounded-lg border border-gray-500  hover:scale-105 ${blog==1?'bg-[#826a45]':'bg-stone-600'}`} onClick={()=>setblog(1)}>1</button>
            <button className={` px-3.5 py-2 rounded-lg border border-gray-500  hover:scale-105 ${blog==2?'bg-[#826a45]':'bg-stone-600'}`} onClick={()=>setblog(2)}>2</button>
            <button className={` px-3.5 py-2 rounded-lg border border-gray-500  hover:scale-105 ${blog==3?'bg-[#826a45]':'bg-stone-600'}`} onClick={()=>setblog(3)}>3</button>
        </div>

      <Footer/>
    </div>
  );
}


function Blog1(){
      return<>
        <BlogContent image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=3840&q=75" title="Picked up a Brussels burger Sprouts." />
        <BlogContent image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2-full.jpg&w=3840&q=75" title="This prefabricated passive house highly"/>
        <BlogContent image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=3840&q=75" title="Overcame breeding point concerns has."/>
      </>
    }

function Blog2(){
  return<>
    <BlogContent image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F4-full.jpg&w=3840&q=75" title="Breeding point has terminate the hole." />
    <BlogContent image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F5-full.jpg&w=3840&q=75" title="Picked up a Brussels burger Sprouts ham"/>
    <BlogContent image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F6-full.jpg&w=3840&q=75" title="Prefabricated passive house"/>
  </>
}

function Blog3(){
  return<>
    <BlogContent image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F5-full.jpg&w=3840&q=75" title="Picked up a Brussels burger Sprouts ham"/>
    <BlogContent image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F4-full.jpg&w=3840&q=75" title="Breeding point has terminate the hole."/>
    <BlogContent image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=3840&q=75" title="Overcame breeding point concerns has."/>
  </>
}