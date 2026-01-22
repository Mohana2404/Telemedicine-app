
import React from 'react';
import './App.css';
import Home from './Home';
import { useTranslation } from "react-i18next";



const App = () => {
  const{t}=useTranslation();
  return (
    
    <div className='vh-100'>
      <div>
      <Home />
     </div>
     </div>
     
   
  );}

export default App