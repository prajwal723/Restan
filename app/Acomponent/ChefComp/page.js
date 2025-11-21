
export default function ChefComp({imagee,namee,role}){

    return(<>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');
</style>
      <div className="h-44 w-44 rounded-full border-1 relative z-10 ml-15">
      <div className="h-40 w-40 rounded-full border-0  overflow-hidden relative z-20 ml-[7px] mt-[7px]">
            <img src={imagee} className="w-full h-full object-cover              "/>
      </div>
      <div className="bg-[#826a45] w-55 h-12 relative z-30 mt-[-70px] ml-[-25px] font-[Marcellus] flex flex-col  ">
           <div className="text-center">
            {namee}
           </div>
           <div className="text-center">
            {role}
           </div>
      </div>
      </div>
  

    
    
    
    
    </>)
}