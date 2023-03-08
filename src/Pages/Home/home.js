import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Programs from '../../Components/Programs/programs'
import Benefits from '../../Components/Benefits/benefits'
import Accreditation from '../../Components/Accreditation/accreditation'
import Event from '../../Components/Events/event'

const Home = () => {
  return (
    <div className='Home'>
        <Banner/>
        <Programs/>
        <Benefits/>
        <Event/>
        <Accreditation/>
    </div>
  )
}

export default Home