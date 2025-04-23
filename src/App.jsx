import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/landing/login.jsx"
import Home from "./components/home.jsx"
import Systems from "./components/systems.jsx"
import HAPI_FHIR from "./components/hapi_fhir.jsx"
import Snowstorm from "./components/snowstorm_terminology.jsx"
import Bahmni from "./components/bahmni.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/systems" element={<Systems />} />
        <Route path="/systems/hapi_fhir" element={<HAPI_FHIR />} />
        <Route path="/systems/snowstorm_terminology" element={<Snowstorm/>} />
        <Route path="/systems/bahmni" element={<Bahmni />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
