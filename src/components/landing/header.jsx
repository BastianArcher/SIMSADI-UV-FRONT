import logo from "../../assets/simsadi.png";

function Header() {
  return (
    <header className="flex items-center top-0 w-full justify-between bg-primary-700 px-10 h-16 border-b-4 border-primary-400">
      <div className="flex items-center">
        <img
          src={logo}
          alt="SIMSADI-UV Icon"
          className="size-16 p-2"
        />
        <p className="font-bold text-xl text-white">SIMSADI-UV</p>
      </div>
      <nav>
        <ul className="flex text-lg font-bold text-white [&>li>a:hover]:text-viking-800 [&>li>a:hover]:transition-colors [&>li>a]:duration-500">
          <li className="pr-10">Nosotros</li>
          <li>Productos</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
