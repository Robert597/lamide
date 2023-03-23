import React from 'react';
import {FaFacebook, FaTwitter, FaInstagram}from "react-icons/fa";
import "../../Styles/Programs/learn.scss";
const Learn = () => {
  return (
    <div className="learn">
          <hr/>
            <h1>Learn and grow with our community</h1>
            <h4>Community is everything! Let’s join and collaborate on our various social media platforms.</h4>
           
           <ul>
            <li><a href='https://www.facebook.com/sfihealthcare'><FaFacebook/></a></li>
            <li><a href='https://twitter.com/sficare_'><FaTwitter/></a></li>
            <li><a href="https://www.instagram.com/sfi_care/"><FaInstagram/></a></li>
           </ul>
    </div>
  )
}

export default Learn