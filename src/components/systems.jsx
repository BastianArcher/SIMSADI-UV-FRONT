import { useNavigate } from "react-router-dom";

function systemSelector() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
    <div className="flex justify-center items-center pt-10 pb-10 bg-gray-100">
      <img className="size-28 object-contain" src="src/assets/simsadi.png" alt="Log SIMSADI-UV" />
      <p className="ml-2 font-bold text-6xl text-primary-700">SIMSADI-UV</p>
    </div>
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
        <h1 className="mt-4 font-semibold text-4xl">SELECCIONA UN SISTEMA</h1>
        <section className="grid grid-cols-3 gap-10 m-10">
          
          <button className="bg-linear-to-br from-primary-100 to-primary-400 rounded-2xl shadow-lg p-6 transition duration-100 hover:scale-105 ease-in" 
          onClick={() => handleNavigation("/systems/snowstorm_terminology")}>
            <img className="size-48 object-contain" src="src/assets/snowstorm.png" alt="Logo Snowstorm" />  
          </button>

          <button className="bg-linear-to-br from-primary-100 to-primary-400  rounded-2xl shadow-lg p-6 transition duration-100 hover:scale-105 ease-in" 
          onClick={() => handleNavigation("/systems/hapi_fhir")}>
            <img className="size-48 object-contain" src="src/assets/hapifhir.png" alt="Logo HAPHI FHIR" />  
          </button>
          
          <button className="bg-linear-to-br from-primary-100 to-primary-400  rounded-2xl shadow-lg p-6 transition duration-100 hover:scale-105 ease-in" 
          onClick={() => window.location.href = "https://10.150.45.205/"}>
            <img className="size-48 object-contain" src="src/assets/bahmni.png" alt="Logo Bahmni" />  
          </button>
        </section>
      </div>
    </>
  );
}

export default systemSelector;
