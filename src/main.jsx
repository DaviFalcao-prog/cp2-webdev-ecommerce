import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { router } from "./routes/AppRoutes";
import { RouterProvider } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider routes = {routes}>
      <Home />
    </RouterProvider>
  </StrictMode>,
)
