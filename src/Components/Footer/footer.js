import React from 'react';
import {FaFacebook, FaTwitter, FaInstagram}from "react-icons/fa";
import { MdMailOutline, MdPhone} from "react-icons/md";
import {ImLocation} from "react-icons/im";
import "../../Styles/footer.scss";
import { Link } from 'react-router-dom';
import { FaLocationArrow } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
        <div className='sec1'>
            <h1>SFICARE</h1>
            <p>SFI HEALTH AND CARE initiative handles training/lecture arrangement for various health and social care diploma and certification courses which could be used for migration to UK, USA, Canada and Australia on work visa or permanent residency arrangements. </p>
            <ul>
                <li><a href='https://www.facebook.com/sfihealthcare'><FaFacebook/></a></li>
                <li><a href='https://twitter.com/sficare_'><FaTwitter/></a></li>
                <li><a href="https://www.instagram.com/sfi_care/"><FaInstagram/></a></li>
            </ul>
        </div>

        <div className='sec2'>
            <h1>Explore</h1>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li 
           >
              <Link to="/programs">Our Programs</Link></li>
            <li
            ><Link to="/about">About Us</Link></li>
            <li 
           ><Link to="/contact">Contact Us</Link></li>
            <li 
           ><Link to="/events">Events</Link></li>
            </ul>
        </div>
        <div className='sec3'>
            <h1>Address</h1>
            <ul>
                <li><FaLocationArrow className="icon"/> LOA Aremu Court, Ashi/Bodija Junction, Bashorun Road, Ibadan, Oyo state, Nigeria.</li>
                <li><MdPhone className="icon"/> 08135430382, 08112320218</li>
                <li><MdMailOutline className="icon"/> info@sficare.org</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer