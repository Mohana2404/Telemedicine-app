import React from 'react'
import './App.css'
import MedicalShield from './assets/Medical Shield.webm'    

const Home = () => {
    const numberOfVilages =  "300+"
    
   
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-primary-subtle w-100 d-flex justify-content-between m-auto p-2">
  <div className="container-fluid">
    <a className="navbar-brand text-white " href="#"><h4 className='text-primary-emphasis'>TeleMed</h4></a>
    </div>
    <div className="d-flex p-2">
        <a className="nav-link text-white m-1 text-primary-emphasis" href="#">Home</a>
        <a className="nav-link text-white m-1 text-primary-emphasis" href="<About/>">About</a>
        <a className="nav-link text-white m-1 text-primary-emphasis" href="#">Contact</a>
        <a className="nav-link text-white m-1 text-primary-emphasis" href="#">Login</a>
        <div className='p-2'>
        <button className="btn btn-primary-emphasis dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    English
  </button>
    <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Tamil</a></li>
    <li><a className="dropdown-item" href="#">English</a></li>
    <li><a className="dropdown-item" href="#">hindi</a></li>
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
          
        />
      </div>

    <h3 className="m-5 align-center">Innovating healthcare, <br/>connecting patients and providers.</h3>
    <p className='m-5'>Connecting rural communities  with quality<br/>
healthcare through telemedicine, digital health records.<br/>
and Al-powered health assistance.</p>
<div className='d-flex m-5 p-10 gap-5'>
<div><h3>{numberOfVilages}<br/></h3><p>villages served </p></div>
<div><h3>24/7<br/></h3><p>healthcare Access</p></div>
<div><h3>3+<br/></h3><p>languages</p></div>
</div>


</div>
  )
}

export default Home