export default function BlogContent({image,title,description}) {
    return(
        <div className=" bg-white rounded-md m-3 my-10 text-gray-800 space-y-3 md:mx-20">
            <img src={image} alt="blog image" className="rounded-t-md "/>
            <div className="space-y-3 p-5">
                <div className=" flex flex-col text-sm md:text-lg space-y-1"> 
                    <div className="flex flex-row">
                        <img src="https://img.icons8.com/?size=100&id=89550&format=png&color=1A1A1A" alt="calendar" className="h-4  mr-2 md:h-6"/>
                        12 August,2024
                    </div>
                    <div className="flex flex-row">
                        <img src="https://img.icons8.com/?size=100&id=Fx70T4fgtNmt&format=png&color=000000" alt="profile" className="h-4  mr-2 md:h-6"/>
                        john Baus
                    </div>
                </div>
                <div className="text-black font-semibold text-3xl md:text-4xl">{title}</div>
                <div className="md:text-xl">Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now</div>
                <button className="bg-[#826a45] p-3 text-white px-7 rounded-4xl hover:bg-black md:text-2xl">Read More</button>
            </div>
            
        </div>
    );
}