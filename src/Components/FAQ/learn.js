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
            <li><FaFacebook/></li>
            <li><FaTwitter/></li>
            <li><FaInstagram/></li>
           </ul>
    </div>
  )
}

export default Learn