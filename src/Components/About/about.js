import React from 'react';
import AboutImg from "../../Assets/Logo.svg";     
import "../../Styles/About/about.scss"; 

const AboutInfo = () => {
  return (
    <div className="about">
        <h1>About Us</h1>

        <div className="aboutInfo">
            <div className="Info">
                <h1>Who We Are</h1>

                <p>SFI CARE is a medical learning program, a subsidiary of EDUCONSULT (educational institute). We are based in Ibadan, Oyo state, Nigeria. We offer diploma and certificate courses on health and wellness that are relevant internationally with CPD certification, and issued by NHCPS.
<br/>
<br/>

“ SFI HEALTH AND CARE initiative handles training/lecture arrangement for various health and social care diploma and certification courses which could be used for migration to UK, USA, Canada and Australia on work visa or permanent residency arrangements.
<br/>
<br/>
Our services includes but not limited to:</p>

<ul>
    <li>Adequate practical training</li>
    <li>International care certification</li>
    <li>Profiling and CV support</li>
    <li> Job search assistance/placement</li> 
    <li>Adequate guide through the application process for work visa or PR.</li>
</ul>
            </div>
            <div className='Image'>
                <img src={AboutImg} alt="about"/>
            </div>
        </div>
    </div>
  )
}

export default AboutInfo;