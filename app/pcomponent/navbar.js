export default function Navbar() {
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