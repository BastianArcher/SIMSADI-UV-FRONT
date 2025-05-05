import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Systems from "./components/Menu.jsx";
import HAPI_FHIR from "./components/FHIR.jsx";
import Snowstorm from "./components/Terminology.jsx";
import Bahmni from "./components/Bahmni.jsx";
import RouteProtection from "./components/tools/RouteProtection.jsx";
import ScrollToTop from "./components/tools/ScrollTop.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
