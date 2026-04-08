import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './GlobalCSS.css'; // ✅ Relative path
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
) 
  