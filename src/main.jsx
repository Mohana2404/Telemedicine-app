import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./i18n";


import './index.css'

import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Chat from './Chat.jsx'
import PharmacyPage from './PharmacyPage.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/chat",
    element:<Chat/>
  },
  {
    path:"/pharmacy",
    element:<PharmacyPage/>
  }
])



createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
