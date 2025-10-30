

export default function BlogPage() {
  return (
    <div className="bg-gray-100  overflow-x-hidden">
     <div>
      <Navbar />
      <Herosection/>
      <BlogContent/>
     </div>
    </div>
  );
}


function Navbar() {
  return (
    <nav className="bg-white p-4 ">
      <ul className="flex justify-between items-center">
        <li>
            <img src="https://img.icons8.com/?size=100&id=3096&format=png&color=1A1A1A" alt="menu" className="h-8" />
        </li>
        <li>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo.png&w=1920&q=75" alt="Logo" className="h-16"/>
        </li>
        <li>
            <img src="https://img.icons8.com/?size=100&id=59997&format=png&color=1A1A1A" alt="cart" className="h-12" />
        </li>
      </ul>
    </nav>
  );
}

function Herosection() {
return(<>
    <div className="  relative overflow-hidden  bg-black pt-24">
        <img src="https://di-uploads-pod6.dealerinspire.com/jaguarnewportbeach/uploads/2018/12/Depositphotos_46548367_xl-2015.jpg" alt="sushi" className="w-full scale-150"/>
        <h1 className=" absolute top-20 text-center font-bold text-3xl bg-black/45 w-full h-full">Blog Single</h1>
    </div>
</>
);
}

function BlogContent({image}) {
    return(
        <div className="">
            <img src={image} alt="blog image"/>
            <div>
                <div>
                    <div>
                        <img src="https://img.icons8.com/?size=100&id=89550&format=png&color=1A1A1A" alt="calendar" className="h-4  mr-2"/>
                        12 August,2024
                    </div>
                    <div>
                        <img src="https://img.icons8.com/?size=100&id=Fx70T4fgtNmt&format=png&color=000000"/>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            
        </div>
    );
}