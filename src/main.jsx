import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import "./i18n";
<<<<<<< HEAD
=======

import './index.css'
import App from './App.jsx'
>>>>>>> 2355ca642670a11e180aab1f49af13f4bf3f184b
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Chat from './Chat.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/chat",
    element:<Chat/>
  }
])
<<<<<<< HEAD
=======



>>>>>>> 2355ca642670a11e180aab1f49af13f4bf3f184b
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
