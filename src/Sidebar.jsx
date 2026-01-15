import React from 'react'
import './App.css'
const Sidebar = () => {
  return (
    <div className='d-flex flex-column m-3 gap-3'>
       <div><i className=" bi bi-people-fill"></i> Roles</div>
       <div><i className=" bi bi-journal-medical"></i> Patients</div>
       
       
    </div>
  )
}

export default Sidebar