import React from 'react';
import logo from '../../Assets/Logo.svg';
import "../../Styles/navbar.scss";
import {Link, Navigate} from "react-router-dom";

const Navbar = () => {
  const[active, setActive] = React.useState("Home");

  return (
    <div className='navBackground'>

        <div className='navlogo'>
            <img src={logo} alt="Logo"/>
        </div>

        <ul className='navbarLinks'>
            <li 
            className={active === "Home" && 'active'}
            onClick={() => setActive("Home")}>
              <Link to="/">Home</Link></li>
            <li 
            className={active === "Program" && 'active'}
            onClick={() => setActive("Program")}>
              <Link to="/programs">Our Programs</Link></li>
            <li
             className={active === "About" && 'active'}
             onClick={() => setActive("About")}><Link to="/about">About Us</Link></li>
            <li 
            className={active === "Contact" && 'active'}
            onClick={() => setActive("Contact")}><Link to="/contact">Contact Us</Link></li>
            <li 
            className={active === "Events" && 'active'}
            onClick={() => setActive("Events")}><Link to="/events">Events</Link></li>
            <li><button onClick={() => Navigate("/contact")}>Chat with us</button></li>
        </ul>
    </div>
  )
}

export default Navbar