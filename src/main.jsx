import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import About from './pages/About'
import Accommodation from './pages/Accommodation'
import Transport from './pages/Transport'
import Tours from './pages/Tours'

import './styles/main.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>404</p>
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <p>404</p>
  },
  {
    path: "/accommodation",
    element: <Accommodation />,
    errorElement: <p>404</p>
  },
  {
    path: "/transport",
    element: <Transport />,
    errorElement: <p>404</p>
  },
  {
    path: "/tours",
    element: <Tours />,
    errorElement: <p>404</p>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
