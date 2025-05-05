import Login from "./tools/Sesion";
import logo from "../assets/simsadi.png";

function Home() {
  return (
    <>
      <header className="flex items-center top-0 w-full justify-between bg-primary-700 px-10 h-16 border-b-4 border-primary-400">
        <div className="flex items-center">
          <img src={logo} alt="SIMSADI-UV Icon" className="size-16 p-2" />
          <p className="font-bold text-xl text-white">SIMSADI-UV</p>
        </div>
        <nav>
          <ul className="flex text-lg font-bold text-white [&>li>a:hover]:text-viking-800 [&>li>a:hover]:transition-colors [&>li>a]:duration-500">
            <li className="pr-10">Nosotros</li>
            <li>Productos</li>
          </ul>
        </nav>
      </header>
      <section className="flex bg-med justify-center items-center">
        <article className="grid grid-cols-2 gap-6 px-14 py-28">
          <div className="flex justify-center items-center">
            <h1 className="text-8xl font-bold text-white drop-shadow-lg mb-4">
              SIMSADI-UV
            </h1>
          </div>
          <div>
            <h2 className="text-4xl text-balance font-medium text-white mb-8">
              El Entorno de Salud Digital de la Universidad de Valparaíso
            </h2>
            <p className="text-xl text-balance font-medium text-white">
              La plataforma SIMSADI-UV es una iniciativa del Laboratorio de Informática en Salud de la Universidad de Valparaíso. Surge como respuesta a la necesidad de avanzar hacia la adopción de estándares de interoperabilidad en salud. Este entorno web integra tres componentes fundamentales: un servidor HAPI FHIR, un servidor terminológico Snowstorm y Bahmni, un sistema clínico basado en OpenMRS. Su propósito es ofrecer un espacio práctico, accesible y controlado tanto para estudiantes como para profesionales y desarrolladores, permitiendo experimentar, validar y crear soluciones tecnológicas alineadas con los estándares actuales, fortaleciendo la formación en salud digital.
            </p>
          </div>
        </article>
      </section>
      <Login />
      <footer className="flex w-screen flex-row justify-evenly items-center bg-primary-700 py-4">
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
