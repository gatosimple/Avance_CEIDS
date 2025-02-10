import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from './pages/LoginPage'
import ConfigurationPage from './pages/ConfigurationPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <LoginPage /> */}
    <ConfigurationPage />
  </StrictMode>,
)