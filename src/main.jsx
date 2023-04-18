import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import router from './pages/router';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AnimatePresence
      initial={{
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </AnimatePresence>
  </React.StrictMode>,
)
