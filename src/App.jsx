
import React from 'react';
import { useTranslation } from "react-i18next";
import './App.css';
import Home from './Home';



const App = () => {
  const{t}=useTranslation();
  return (
    <div>
    <div className='vh-100'>
      <Home />
      
    </div>
    


   
    </div>
  )}

export default App