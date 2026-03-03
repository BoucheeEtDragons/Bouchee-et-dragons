import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './pages/menu.tsx'
import Login from './pages/login/login.tsx'
import SystemDesign from './pages/system-design.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/system-design" element={<SystemDesign />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
