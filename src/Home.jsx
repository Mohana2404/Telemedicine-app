import React from 'react';
import './App.css';
import MedicalShield from './assets/Medical Shield.webm';
import { useTranslation } from "react-i18next";


const Home = () => {
   const { t, i18n } = useTranslation();
   const numberOfVilages =  "300+";
    
   
  return (
  
    <div>
        <nav className="navbar navbar-expand-lg bg-primary-subtle w-100 d-flex justify-content-between m-auto p-2">
  <div className="container-fluid">
    <a className="navbar-brand text-white " href="#"><h4 className='text-primary-emphasis'>TeleMed</h4></a>
    </div>
    <div className="d-flex p-1">
        <a className="nav-link text-white m-3 text-primary-emphasis" href="#">{t("home")}</a>
        <a className="nav-link text-white m-3 text-primary-emphasis" href="#">{t("about")}</a>
        <a className="nav-link text-white m-3 text-primary-emphasis" href="#">{t("contact")}</a>
        <a className="nav-link text-white m-3 text-primary-emphasis" href="#">{t("login")}</a>
        <div className='p-2'>
          <div className='dropdown'>
        <a className="btn btn-primary-emphasis dropdown-toggle nav-item-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    English
  </a>

    <ul className="dropdown-menu nav-item-dropdown">
    <li><a className="dropdown-item" href="#" onClick={() =>{ i18n.changeLanguage("ta");localStorage.setItem("lang","ta");}}>Tamil</a></li>
    <li><a className="dropdown-item" href="#" onClick={() =>{ i18n.changeLanguage("en");localStorage.setItem("lang","en");}}>English</a></li>
    <li><a className="dropdown-item" href="#" onClick={() =>{ i18n.changeLanguage("hi");localStorage.setItem("lang","hi");}}>hindi</a></li>
  </ul>
</div>
        </div>
        
{/* hello */}
        

    </div>
</nav>
    <div className="video-container ">
        <video 
          src={MedicalShield} 
          autoPlay 
          loop 
          muted 
          playsInline 
          
        />
      </div>

    <div className="m-5">
    <h3>{t("Innovating healthcare")}</h3>
    <h3>{t("connecting patients and providers")}</h3>
    </div>
    <p className='m-5'>Connecting rural communities  with quality<br/>
healthcare through telemedicine, digital health records.<br/>
and Al-powered health assistance.</p>
<div className='d-flex m-5 p-10 gap-5'>
<div><h3>{numberOfVilages}<br/></h3><p>villages served </p></div>
<div><h3>24/7<br/></h3><p>healthcare Access</p></div>
<div><h3>3+<br/></h3><p>languages</p></div>
</div>

<div><button className="btn btn-color m-5 ">Login</button>
    <button className='btn btn-outline-secondary'>learn more</button>

</div>

</div>


  )
}

export default Home