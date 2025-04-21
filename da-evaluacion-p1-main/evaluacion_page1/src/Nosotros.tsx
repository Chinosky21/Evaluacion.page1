import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Stylenos.css'
import './components/Navbar.css'
import './components/Nosotros.css'

import Nosotros from './components/Nosotros';
import Navbar from './components/Navbar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <Nosotros/>
  </StrictMode>
)
