import React from 'react';
import {motion} from 'framer-motion';
import {Swiper, SwiperSlide} from 'swiper/react';
import banner1 from "../../Assets/Rectangle 21 (7).png";
import banner2 from "../../Assets/medical-team-with-protective-face-masks-prevent-infection-with-covid19-monitoring-sick-patient-during-clinical-appointment-hospital-ward-african-american-doctors-explaining-healthcare-treatment.png";
import banner3 from "../../Assets/Pharmacy assistant (1).png";
import banner4 from "../../Assets/portrait-young-medic-using-laptop-technology-desk.png";
import {Navigation, Pagination, Autoplay} from 'swiper';
import {circIn, easeIn, easeInOut,  spring} from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../../Styles/Home/banner.scss"

const ProgramBanner = () => {
  return (
    <Swiper className='homepage'
    modules={[Navigation, Pagination, Autoplay]}
    slidesPerView={1}
    speed={2000}
    navigation
    autoplay={{
     delay: 4000,
     disableOnInteraction: false
    }}
    pagination={{clickable: true}}
    style={{
     "--swiper-pagination-color": "#fff",
     "--swiper-navigation-size": "20px",
     "--swiper-navigation-color": "#fff",
     
    }}
    >

       <SwiperSlide className="slider1">
           <img src={banner1} alt='banner graphic'/>
           <motion.h1
           initial="hidden"
           whileInView="visible"
           viewport={{once: true}}
           transition={{duration: 2, ease: easeInOut}}
           variants={{
             visible: {opacity: 1},
             hidden:{opacity: 0}
           }}>Advance you career as a caregiver.</motion.h1>

        
           
           <motion.button
           initial="hidden"
           whileInView="visible"
           whileHover={{scale: 1.05, y: "-5px", transition:{
             duration: .5,  ease: easeInOut
            }}}
           viewport={{once: true}}
           transition={{duration: 1, delay: 1, ease: easeIn}}
           variants={{
             visible: {opacity: 1},
             hidden:{opacity: 0}
           }}>Learn More</motion.button>
       </SwiperSlide>

       <SwiperSlide className="slider2">
           <img src={banner2} alt='banner graphic'/>
           <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{duration: 1, delay: 1, ease: easeInOut}}
            variants={{
              visible: {opacity: 1},
              hidden:{opacity: 0}
            }}>Study to save lives.</motion.h1>
          

           <motion.button
            initial="hidden"
            whileInView="visible"
            whileHover={{scale: 1.05, y: "-10px", transition:{
             duration: .5, ease: easeInOut
            }}}
            viewport={{once: true}}
            transition={{duration: 1, delay: 1.7, ease: easeIn}}
            variants={{
              visible: {opacity: 1},
              hidden:{opacity: 0}
            }}>Learn More</motion.button>
       </SwiperSlide>

       <SwiperSlide className="slider1">
           <img src={banner3} alt='banner graphic'/>
           <motion.h1
           initial="hidden"
           whileInView="visible"
           viewport={{once: true}}
           transition={{duration: 2, ease: easeInOut}}
           variants={{
             visible: {opacity: 1},
             hidden:{opacity: 0}
           }}>Learn in-demand health skills from certified professionals.</motion.h1>

          
           
           <motion.button
           initial="hidden"
           whileInView="visible"
           whileHover={{scale: 1.05, y: "-10px", transition:{
             duration: .5,  ease: easeInOut
            }}}
           viewport={{once: true}}
           transition={{duration: 1, delay: 1, ease: easeIn}}
           variants={{
             visible: {opacity: 1},
             hidden:{opacity: 0}
           }}>Learn More</motion.button>
       </SwiperSlide>

       <SwiperSlide className="slider1">
           <img src={banner4} alt='banner graphic'/>
           <motion.h1
           initial="hidden"
           whileInView="visible"
           viewport={{once: true}}
           transition={{duration: 2, ease: easeInOut}}
           variants={{
             visible: {opacity: 1},
             hidden:{opacity: 0}
           }}>Be Relevant Internationally as an Health-care Practitioner.</motion.h1>

          
           
           <motion.button
           initial="hidden"
           whileInView="visible"
           whileHover={{scale: 1.05, y: "-10px", transition:{
             duration: .5,  ease: easeInOut
            }}}
           viewport={{once: true}}
           transition={{duration: 1, delay: 1, ease: easeIn}}
           variants={{
             visible: {opacity: 1},
             hidden:{opacity: 0}
           }}>Learn More</motion.button>
       </SwiperSlide>

   
    </Swiper>
  )
}

export default ProgramBanner