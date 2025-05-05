import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home.jsx";
import Systems from "./components/systems.jsx";
import HAPI_FHIR from "./components/hapi_fhir.jsx";
import Snowstorm from "./components/snowstorm_terminology.jsx";
import Bahmni from "./components/bahmni.jsx";
import RouteProtection from "./components/RouteProtection.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/systems"
          element={
            <RouteProtection>
              <Systems />
            </RouteProtection>
          }
        />
        <Route
          path="/systems/hapi_fhir"
          element={
            <RouteProtection>
              <HAPI_FHIR />
            </RouteProtection>
          }
        />
        <Route
          path="/systems/snowstorm_terminology"
          element={
            <RouteProtection>
              <Snowstorm />
            </RouteProtection>
          }
        />
        <Route
          path="/systems/bahmni"
          element={
            <RouteProtection>
              <Bahmni />
            </RouteProtection>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

