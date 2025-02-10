import { StrictMode  } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RecuperarContraseña from "./pages/RecuperarContraseña";
import RegistroPage from "./pages/RegistroPage";
import CambiarContraseña from "./pages/Recuperar-CambiarContraseña";
import CambioExitoso from "./pages/CambioExitoso";
import ConfigurationPage from "./pages/ConfigurationPage";
import LoginPage from "./pages/LoginPage";
import PaginaInicio from "./pages/PaginaInicio";
import "bootstrap/dist/css/bootstrap.min.css";
 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/recuperar-contraseña" element={<RecuperarContraseña />} />
        <Route path="/nueva-contraseña" element={<CambiarContraseña />} />
        <Route path="/cambio-exitoso" element={<CambioExitoso />} />
        <Route path="/configuracion" element={<ConfigurationPage />} />
        <Route path="/inicio" element={<PaginaInicio />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  </StrictMode>,
)