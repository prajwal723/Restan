 export default function Herosection({title}) {
return(<>
    <div className="  relative overflow-hidden  bg-black pt-24 md:mt-16">
        <img src="https://di-uploads-pod6.dealerinspire.com/jaguarnewportbeach/uploads/2018/12/Depositphotos_46548367_xl-2015.jpg" alt="sushi" className="w-full scale-150"/>
        <h1 className=" absolute top-20 text-center font-bold text-3xl bg-black/45 w-full h-full md:text-7xl md:top-44">{title}</h1>
    </div>
</>
);
}