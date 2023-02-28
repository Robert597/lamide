import React from 'react';
import logo from '../../Assets/Logo.svg';
import "../../Styles/navbar.scss";

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
            onClick={() => setActive("Home")}>Home</li>
            <li 
            className={active === "Program" && 'active'}
            onClick={() => setActive("Program")}>Our Programs</li>
            <li
             className={active === "About" && 'active'}
             onClick={() => setActive("About")}>About Us</li>
            <li 
            className={active === "Contact" && 'active'}
            onClick={() => setActive("Contact")}>Contact Us</li>
            <li 
            className={active === "Events" && 'active'}
            onClick={() => setActive("Events")}>Events</li>
            <li><button>Chat with us</button></li>
        </ul>
    </div>
  )
}

export default Navbar