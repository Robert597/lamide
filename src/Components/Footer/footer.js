import React from 'react';
import {FaFacebook, FaTwitter, FaInstagram}from "react-icons/fa";
import {MdLocationOn, MdMailOutline, MdPhone} from "react-icons/md";
import "../../Styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
        <div className='sec1'>
            <h1>SFICARE</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium aliquam felis et bibendum. </p>
            <ul>
                <li><FaFacebook/></li>
                <li><FaTwitter/></li>
                <li><FaInstagram/></li>
            </ul>
        </div>

        <div className='sec2'>
            <h1>Explore</h1>
            <ul>
                <li>Home</li>
                <li>Our Programs</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Events</li>
            </ul>
        </div>
        <div className='sec3'>
            <h1>Address</h1>
            <ul>
                <li><MdLocationOn className="icon"/> LOA Aremu Court, Ashi/Bodija Junction, Bashorun Road, Ibadan, Oyo state, Nigeria.</li>
                <li><MdPhone className="icon"/> 08135430382, 08112320218</li>
                <li><MdMailOutline className="icon"/> info@sficare.org</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer