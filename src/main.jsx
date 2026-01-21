import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import "./i18n";

import './index.css'
import App from './App.jsx'
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



createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
