import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AOS from 'aos'

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  easing: 'ease-in-out'
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
