import React from 'react'
import ProgramBanner from '../../Components/Banner/ProgramBanner';
import Info from '../../Components/Info/Info';
import Goal from '../../Components/Goal/goal';
import CourseInfo from '../../Components/Courses/CourseInfo';
import Benefits from '../../Components/Benefits/benefits';
import Explore from '../../Components/Explore/explore';
import Banner from '../../Components/Explore/Banner';
import MinPrograms from '../../Components/Programs/minprograms';
import FAQ from '../../Components/FAQ/faq';
import Accordion from '../../Components/FAQ/accordion';
import Learn from '../../Components/FAQ/learn';
import {diploma, certificate} from "../../Utils/courses";


const Program = () => {
  return (
    <div>
        <ProgramBanner/>
        <Info/>
        <Goal/>
        <CourseInfo/>
        <Explore/>
        <Benefits/> 
        <Banner title={"Diploma"}/>
        <MinPrograms data={diploma}/>
        <Banner title={"Certificate"}/>
        <MinPrograms data={certificate}/>
        <FAQ/>
        <Accordion/>
        <Learn/>
     </div>
  )
}

export default Program;