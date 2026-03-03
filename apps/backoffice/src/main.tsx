import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuPage from './pages/menu/menu.tsx'
import Login from './pages/login/login.tsx'
import SystemDesign from './pages/system-design.tsx'
import './index.css'
import "./index.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/system-design" element={<SystemDesign />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
