"use client";
import { useRouter } from "next/navigation";

export default function Returntop({destination}){
    const router=useRouter();
    return<>
        <div className="fixed bottom-10 right-4 z-50"> 
            <button className="bg-white  border border-black rounded-full p-2 md:p-3" onClick={()=>router.push(destination)}>
                <img src="https://img.icons8.com/?size=100&id=39778&format=png&color=000000" alt={destination} className="h-6 md:h-9"/>
            </button>
        </div>
    </>
}