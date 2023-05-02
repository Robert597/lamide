import React from 'react';
import logo from '../../Assets/Logo.svg';
import "../../Styles/navbar.scss";
import {NavLink} from "react-router-dom";
import MenuController from './MenuConroller';



const Navbar = () => {


  return (
    <div className='navBackground'>

        <div className='navlogo'>
            <img src={logo} alt="Logo"/>
        </div>

        <ul className='navbarLinks'>
        <li 
           >
              <NavLink exact activeClassName="active" to="/">Home</NavLink></li>
            <li 
           >
              <NavLink activeClassName="active" to="/programs">Our Programs</NavLink></li>
            <li
            ><NavLink activeClassName="active" to="/about">About Us</NavLink></li>
            <li 
           ><NavLink activeClassName="active" to="/contact">Contact Us</NavLink></li>
            <li 
           ><NavLink activeClassName="active" to="/event">Events</NavLink></li>
        </ul>

        <MenuController/>
    </div>
  )
}

export default Navbar