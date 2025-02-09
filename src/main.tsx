import { StrictMode  } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RecuperarContraseña from "./pages/RecuperarContraseña";
import CambiarContraseña from "./pages/Recuperar-CambiarContraseña";
import CambioExitoso from "./pages/CambioExitoso";
import "bootstrap/dist/css/bootstrap.min.css";
 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/recuperar-contraseña" element={<RecuperarContraseña />} />
        <Route path="/nueva-contraseña" element={<CambiarContraseña />} />
        <Route path="/cambio-exitoso" element={<CambioExitoso />} />
      </Routes>
    </Router>
  </StrictMode>,
)