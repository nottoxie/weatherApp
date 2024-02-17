import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Favicon folder/favicon.ico'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [menu, setMenu]  = useState("weather")

  return (


    <div className='navbar'>
        <div className='navbar__logo'>
        <a href="https://github.com/"><img src={logo} alt=''/></a>
        </div>
          <ul className='navbar__menu'>
            <li className='navbar__wtr' onClick={()=>{setMenu("weather")}}>Weather{menu==="weather"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("github")}}>
              <a href="https://github.com/nottoxie" target="_blank" rel='noreferrer' >GitHub{menu==="github"?<hr/>:<></>}</a>
            </li>
            <li onClick={()=>{setMenu("updatelogs")}}>
              <a href="../UpdateLogs/UpdateLogs.jsx"><Link to='/UpdateLogs'>Update-Log{menu==="updatelogs"?<hr/>:<></>}</Link></a>
            </li>
            <li onClick={()=>{setMenu("resources")}}>
              <a href="https://github.com/nottoxie">Resources{menu==="resources"?<hr/>:<></>}</a>
            </li>           
          </ul>
</div>
  )
}
