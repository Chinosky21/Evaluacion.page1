import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Stylenos.css'
import './components/Navbar.css'
import './components/Contacto.css'

import Navbar from './components/Navbar';
import Contactos from './components/Contacto'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <Contactos/>
  </StrictMode>
)
