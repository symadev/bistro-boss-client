import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthContext';
// ✅ Force DaisyUI into light mode
document.documentElement.setAttribute('data-theme', 'light');



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HelmetProvider>
    <AuthProvider>
   <div  className="max-w-screen-xl mx-auto">
     <RouterProvider router={router} />
     </div>
     </AuthProvider>
   </HelmetProvider>
  </StrictMode>,
)
