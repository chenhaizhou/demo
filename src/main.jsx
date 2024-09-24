import { StrictMode, createContext } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider
} from "react-router-dom"
import { AuthProvider } from './context/auth'
import {router} from './router'
import './tailwind.css'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
