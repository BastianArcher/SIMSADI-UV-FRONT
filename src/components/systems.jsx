import { useNavigate } from "react-router-dom";

function systemSelector() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="font-semibold text-4xl">SELECCIONA UN SISTEMA</h1>
        <section className="grid grid-cols-3 gap-10 m-20">
          
          <button className="bg-linear-to-br from-primary-100 to-primary-400 rounded-2xl shadow-lg p-6 transition duration-100 hover:scale-105 ease-in" onClick={() => handleNavigation("/systems/snowstorm_terminology")}>
            <img className="size-64 object-contain" src="src/assets/snowstorm.png" alt="Logo Snowstorm" />  
          </button>

          <button className="bg-linear-to-br from-primary-100 to-primary-400  rounded-2xl shadow-lg p-6 transition duration-100 hover:scale-105 ease-in" onClick={() => handleNavigation("/systems/hapi_fhir")}>
            <img className="size-64 object-contain" src="src/assets/hapifhir.png" alt="Logo HAPHI FHIR" />  
          </button>
          
          <button className="bg-linear-to-br from-primary-100 to-primary-400  rounded-2xl shadow-lg p-6 transition duration-100 hover:scale-105 ease-in" onClick={() => handleNavigation("/systems/bahmni")}>
            <img className="size-64 object-contain" src="src/assets/bahmni.png" alt="Logo Bahmni" />  
          </button>
        </section>
      </div>
    </>
  );
}

export default systemSelector;
