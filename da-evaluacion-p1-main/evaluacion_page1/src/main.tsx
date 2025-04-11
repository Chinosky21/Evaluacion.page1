import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/Navbar.css'
import Description from './components/Description';
import Navbar from './components/Navbar';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <Description/>

  </StrictMode>,
)
