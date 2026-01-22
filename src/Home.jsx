import React from 'react';
import './App.css';
import MedicalShield from './assets/Medical Shield.webm';
import { useTranslation } from "react-i18next";
import VideoConsultation from './VideoConsultation/consultation';


const Home = () => {
   const { t, i18n } = useTranslation();
   const numberOfVilages =  "300+";
    
   
  return (
  
    <div>
        <nav className="navbar navbar-expand-lg bg-primary-subtle w-100 d-flex justify-content-between m-auto p-2">
  <div className="container-fluid">
    <a className="navbar-brand text-white " href="#"><h4 className='text-primary-emphasis'>TeleMed</h4></a>
    </div>
    <div className="d-flex p-2">
        <a className="nav-link text-white m-1 text-primary-emphasis" href="#">{t("home")}</a>
        <a className="nav-link text-white m-1 text-primary-emphasis" href="#">{t("about")}</a>
        <a className="nav-link text-white m-1 text-primary-emphasis" href="#">{t("contact")}</a>
        <a className="nav-link text-white m-1 text-primary-emphasis" href="#">{t("login")}</a>
        <div className='p-2'>
        <button className="btn btn-primary-emphasis dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    English
  </button>
    <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#" onClick={() =>{ i18n.changeLanguage("ta");localStorage.setItem("lang","ta");}}>Tamil</a></li>
    <li><a className="dropdown-item" href="#" onClick={() =>{ i18n.changeLanguage("en");localStorage.setItem("lang","en");}}>English</a></li>
    <li><a className="dropdown-item" href="#" onClick={() =>{ i18n.changeLanguage("hi");localStorage.setItem("lang","hi");}}>hindi</a></li>
  </ul>

        </div>
        

        

    </div>
</nav>
    <div className="video-container ">
        <video 
          src={MedicalShield} 
          autoPlay 
          loop 
          muted 
          playsInline 
          d-flex m-5 
        />
      </div>

    <div className="m-5">
    <h3 className="responsive-text">{t("innovatingHealthcare")}</h3>
    <h3 className="responsive-text">{t("connectingPatientsProviders")}</h3>
    </div>
   <div className="m-5">
   <p className="responsive-text">{t('ruralLineOne')}<br/>{t('ruralLineTwo')}<br/>
   {t('ruralLineThree')}</p><br/>
   </div>
   
   
   
<div className='d-flex m-5 p-10 gap-5'>
<div><h3>{numberOfVilages}<br/></h3><p>{t("villagesServed")} </p></div>
<div><h3>24/7<br/></h3><p>{t("healthcareAccess")}</p></div>
<div><h3>3+<br/></h3><p>{t("languages")}</p></div>
</div>

<div><button className="btn btn-color m-5 ">{t("login")}</button>
    <button className='btn btn-outline-secondary'>{t("learnMore")}</button>

</div>
 


<div>
      
      <VideoConsultation />
    </div>
  
</div>

  )
}

export default Home