import React from 'react';
import {FaTimes} from "react-icons/fa";
import {FiMenu} from "react-icons/fi";
import { NavLink, Navigate } from 'react-router-dom';
import "../../Styles/menuController.scss";


const MenuController = () => {
    const[showMenuModal, setShowMenuModal] = React.useState(false);
    
   
  return (
    <div className="menu">

    <div className="MenuController"  onClick={() => setShowMenuModal(prev => !prev)}>
      {showMenuModal ? (
         <FaTimes/>
      ): <FiMenu/>}
    </div>
 
   
   <div className={showMenuModal ? " showchild modal" : "absoluteChild modal"}>
   <ul className='navbarLinks'>
            <li onClick={() => setShowMenuModal(prev => !prev)}
           >
              <NavLink exact activeClassName="active" to="/">Home</NavLink></li>
            <li onClick={() => setShowMenuModal(prev => !prev)}
           >
              <NavLink activeClassName="active" to="/programs">Our Programs</NavLink></li>
            <li onClick={() => setShowMenuModal(prev => !prev)}
            ><NavLink activeClassName="active" to="/about">About Us</NavLink></li>
            <li onClick={() => setShowMenuModal(prev => !prev)}
           ><NavLink activeClassName="active" to="/contact">Contact Us</NavLink></li>
            <li 
           ><NavLink onClick={() => setShowMenuModal(prev => !prev)}activeClassName="active" to="/event">Events</NavLink></li>

        </ul>
        </div>

  </div>


  )
}

export default MenuController