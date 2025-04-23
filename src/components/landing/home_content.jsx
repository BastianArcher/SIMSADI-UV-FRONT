function HomeContent() {    
  return (
    <>
      <section className="flex bg-med justify-center items-center">
        <article className="grid grid-cols-2 gap-6 px-14 py-28">
          <div className="flex justify-center items-center">
            <h1 className="text-8xl font-bold text-white drop-shadow-lg mb-4">
              SIMSADI-UV
            </h1>
          </div>
          <div>
            <h2 className="text-4xl font-medium text-white mb-8">
              El Entorno de Salud Digital de la Universidad de Valparaíso
            </h2>
            <p className="text-xl text-justify font-medium text-white">
            La plataforma SIMSADI-UV es una iniciativa del Laboratorio de Informática en Salud de la Universidad de Valparaíso.
            Surge como respuesta a la necesidad de avanzar hacia la adopción de estándares de interoperabilidad en salud, como
            HL7 FHIR y SNOMED CT, en el contexto chileno. Este entorno web integra tres componentes fundamentales: un servidor 
            HAPI FHIR para la gestión de datos clínicos estructurados, un servidor terminológico Snowstorm para trabajar con SNOMED CT 
            y Bahmni, un sistema clínico basado en OpenMRS. Su propósito es ofrecer un espacio práctico, accesible y controlado 
            tanto para estudiantes como para profesionales y desarrolladores, permitiendo experimentar, validar y crear soluciones 
            tecnológicas alineadas con los estándares actuales, fortaleciendo la formación en salud digital.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
export default HomeContent;
