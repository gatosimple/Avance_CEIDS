import { StrictMode  } from "react"
import { createRoot } from "react-dom/client"
import RegistroPage from "./pages/RegistroPage"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RegistroPage />
  </StrictMode>,
)