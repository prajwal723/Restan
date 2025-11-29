export default function Herosection({ title }) {
  return (
    <>
      <div className="  relative overflow-hidden  bg-black pt-24 md:mt-16 md:pt-14 md:h-[500px]">
        <img
          src="https://di-uploads-pod6.dealerinspire.com/jaguarnewportbeach/uploads/2018/12/Depositphotos_46548367_xl-2015.jpg"
          alt="sushi"
          className="w-full scale-150 md:scale-100"
        />
        <h1 className=" absolute top-16 text-center text-white font-bold text-4xl bg-black/45 w-full h-full md:text-6xl md:top-40">
          {title}
        </h1>
        <div className="absolute flex text-white justify-center w-full top-26 text-xs  md:top-60 gap-1.5 md:font-semibold">
          <img
            src="https://img.icons8.com/?size=100&id=U5JRqX4RSgfj&format=png&color=FFFFFF"
            className="h-4 md:h-6"
          />
          <p className="md:text-lg">Home</p>
          <img
            src="https://img.icons8.com/?size=100&id=89230&format=png&color=FFFFFF"
            className="h-4 md:h-6"
          />
          <p className="md:text-lg">{title}</p>
        </div>
      </div>
    </>
  );
}
