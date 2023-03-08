 import React from 'react';
 import banner1 from "../../Assets/banner1 (1).png";
 import banner2 from "../../Assets/banner1 (2).png";
 import banner3 from "../../Assets/Rectangle 21.png";
 import "../../Styles/Home/banner.scss";
 import gsap from 'gsap';
 import {circIn, easeIn, easeInOut, motion, spring} from 'framer-motion';
 import {Swiper, SwiperSlide} from 'swiper/react';
 import {Navigation, Pagination, Autoplay} from 'swiper';
 import 'swiper/css';
 import 'swiper/css/pagination';
 import 'swiper/css/navigation';
 
 const Banner = () => {
  

 
  
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

            <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{duration: 1, delay: .5, ease: easeInOut}}
            variants={{
              visible: {opacity: 1},
              hidden:{opacity: 0}
            }}>Upskill as a medical pro in months not years.</motion.p>
            
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
             }}>Learn in-demand health skills from certified professionals.</motion.h1>
            <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{duration: 1, delay: 1.5, ease: easeInOut}}
            variants={{
              visible: {opacity: 1},
              hidden:{opacity: 0}
            }}>Boost your career by empowering yourself through continous education from industry experts.</motion.p>

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
            }}>Advance you career as a caregiver.</motion.h1>

            <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{duration: 1, delay: .5, ease: easeInOut}}
            variants={{
              visible: {opacity: 1},
              hidden:{opacity: 0}
            }}>Upskill as a medical pro in months not years.</motion.p>
            
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
 
 export default Banner