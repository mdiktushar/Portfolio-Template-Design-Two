import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './pages/Home'


const router = createBrowserRouter([
  {
    path: `/`,
    element: <MainLayout />,
    children: [
      {
        path: `/`,
        element: <Home />,
        // loader: async () => await fetch('/data/banner.json'),
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
