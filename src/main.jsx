import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import './index.css'
import './App.css'
import Root from './routes/Root'
import Dashboard from './routes/Dashboard'
import ErrorPage from './routes/ErrorPage'
import QRCodeScanner from './routes/QRCodeScanner'
import Login from './routes/Login'
import Report from './routes/Report'
import Signup from './routes/Signup'
import ListeRapport from './routes/ListeRapport'
import ListePhotos from './routes/ListPhotos'
import ListeComptes from './routes/ListeComptes'

const router = createBrowserRouter([
  {
    path: "*",
    element: <h2>Not Found</h2>,
  },
  {
    path: "/Signup",
    element: <Signup/>,
  },
  {
    path: "/",
    element: <Login/>,
  },
  {
    

    path: "/Admin",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      }, 
      {
        path: "Scanner",
        element: <QRCodeScanner />,
      }, 
      {
        path: "Rapport",
        element: <Report />,
      },
      
      {
        path: "ListeRapport",
        element: <ListeRapport />,
      },
      
      {
        path: "ListePhotos",
        element: <ListePhotos />,
      },
      
      {
        path: "ListeComptes",
        element: <ListeComptes />,
      },

      {
        path: "*",
        element: <h2>Not Found</h2>,
      },
    ],
    
    
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
