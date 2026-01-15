import React from 'react'
import './App.css'
import Sidebar from './Sidebar.jsx'   


const App = () => {
  return (
    <>
    <div className='d-flex vh-100'>
      <div className="w-20 "><Sidebar/></div>
      <div className="w-80 bg-light">content</div>
    </div>
    
    </>
  )
}

export default App