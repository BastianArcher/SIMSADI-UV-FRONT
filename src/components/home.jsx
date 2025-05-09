import Login from "./tools/Sesion";
import logo from "../assets/simsadi.png";

function Home() {
  return (
    <>
      <header className="flex items-center top-0 w-full justify-between bg-primary-700 px-3 sm:px-10 h-16 border-b-4 border-primary-400">
        <div className="flex items-center">
          <img src={logo} alt="SIMSADI-UV Icon" className="size-12 sm:size-16 p-2" />
          <p className="font-mono font-normal text-xl text-white">SIMSADI-UV</p>
        </div>
        <nav>
          <ul className="flex text-md sm:text-lg font-bold gap-2 sm:gap-8 text-white [&>li>a:hover]:text-primary-200 [&>li>a:hover]:transition-colors [&>li>a]:duration-200">
            <li className="font-mono"><a href="">Nosotros</a></li>
            <li className="font-mono"><a href="">Productos</a></li>
          </ul>
        </nav>
      </header>

      <section className="flex bg-med justify-center items-center">
        <article className="grid lg:grid-cols-2 gap-6 px-4 py-8 lg:px-14 lg:py-28">
          <div className="flex justify-center items-center">
            <h1 className="text-5xl sm:text-8xl font-mono font-light text-white drop-shadow-lg mb-4">
              SIMSADI-UV
            </h1>
          </div>
          <div>
            <h2 className="text-xl sm:text-4xl text-balance font-mono font-semibold text-white mb-8">
              El Entorno de Salud Digital de la Universidad de Valparaíso
            </h2>
            <p className="text-xl text-balance font-mono font-medium text-white">
            SIMSADI-UV es una plataforma del Laboratorio de Informática en Salud de la Universidad de Valparaíso que impulsa la interoperabilidad en salud. Integra un servidor HAPI FHIR, Snowstorm y Bahmni, ofreciendo un entorno práctico para que estudiantes, profesionales y desarrolladores prueben y creen soluciones alineadas con estándares digitales.
            </p>
          </div>
        </article>
      </section>

      <Login />
      
      <footer className="flex sm:w-screen flex-col gap-1 sm:flex-row justify-evenly items-center bg-primary-700 py-4">
        <p className="text-sm text-gray-300">SIMSADI-UV</p>
        <p className="text-sm text-gray-300">
          Escuela de Ingeniería Civil Biomédica
        </p>
        <p className="text-sm text-gray-300">Universidad de Valparaíso</p>
        <p className="text-sm text-gray-300">
          Desarrollado por{" "}
          <a
            className="text-primary-400"
            href="https://github.com/BastianArcher"
          >
            Bastián Manríquez
          </a>
        </p>
      </footer>
    </>
  );
}
export default Home;
