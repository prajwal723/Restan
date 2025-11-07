export default function Booktable() {
    return <>
        <div className="bg-gray-900 relative p-3 pb-72 pt-14 mb-32 space-y-6 md:pb-20 md:px-16 md:mt-0">
            <div className="md:w-1/2 space-y-6">
                <h1 className="font-semibold text-2xl md:text-3xl">Reservation</h1>
                <h2 className="font-semibold text-4xl md:text-6xl">Reservation Your Favorite Private Table</h2>
                <p className="text-[15px]">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.</p>
            </div>
            <div className="space-y-4 md:flex md:gap-8">
                <div>
                    <p  className="font-semibold my-2 text-2xl">Launch Menu</p>
                    <p>30+ items</p>
                </div>
                <div>
                    <p  className="font-semibold my-2 text-2xl">Dinner Menu</p>
                    <p>50+ items</p>
                </div>
            </div>
            
            <div className="bg-zinc-900 absolute mr-3  p-3 py-12 border border-gray-600 rounded-3xl md:right-20  md:py-20 md:top-20 md:px-10 md:w-1/3">
                <form className="space-y-3 md:space-y-6" onSubmit={()=>{alert("Table Booked!")}}>
                <input type="tel" placeholder="Phone Number" minLength={10} maxLength={10} required className="border bg-gray-600 border-gray-300 p-2 rounded-md w-full md:p-3" />
                <div className="border-gray-300  border bg-gray-600 p-2 rounded-md w-full md:p-3">
                    <select >
                        <option className="text-black">1 Person</option>
                        <option className="text-black">2 Person</option>
                        <option className="text-black">3 Person</option>
                        <option className="text-black">4 Person</option>
                        <option className="text-black">5 Person</option>
                    </select>
                </div>
                <input type="date" placeholder="Date" required className="border bg-gray-600 border-gray-300 p-2 text-white rounded-md w-full md:p-3" />
                <input type="time" placeholder="Time" required className="border bg-gray-600 border-gray-300 p-2 rounded-md w-full md:p-3" />
                <button type="submit" className="text-white bg-red-800 p-3 rounded-xl px-6 md:p-4 md:text-lg" >Book A Table</button>
                </form>
            </div>
            
        </div>

    </>
}