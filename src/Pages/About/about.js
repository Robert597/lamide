import React from 'react'
import AboutInfo from '../../Components/About/about';
import Goal from '../../Components/Goal/goal';
import Director from '../../Components/About/director';
import Explore from '../../Components/Explore/Aboutexplore';
import Benefits from '../../Components/Benefits/benefits';
import FAQ from '../../Components/FAQ/faq';
import Accordion from '../../Components/FAQ/accordion';
import Accreditation from '../../Components/Accreditation/accreditation';
import Learn from '../../Components/FAQ/learn';

const About = () => {
  return (
    <div>
        <AboutInfo/>
        <Goal/>
        <Director/>
        <Explore/>
        <Benefits/>
        <FAQ/>
        <Accordion/>
        <Accreditation/>
        <Learn/>
    </div>
  )
}

export default About;