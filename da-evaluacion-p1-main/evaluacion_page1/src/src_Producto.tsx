import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Stylenos.css'
import './components/Navbar.css'
import './components/Producto.css'

import Navbar from './components/Navbar';
import App from './components/Producto'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <App/>
  </StrictMode>
)
