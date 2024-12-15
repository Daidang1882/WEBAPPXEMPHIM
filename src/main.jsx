import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './home/Home.jsx'
import './index.css'
import 'swiper/css'

// bootstrap css
//import 'bootstrap/dist/css/bootstrap.min.css'
import './css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// fonts and icons
import '././assets/css/icofont.min.css'
import '././assets/css/animate.css'
import './css/styles.css'
//import '././assets/css/style.min.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
