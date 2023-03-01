import React from 'react';
import card from "../../Assets/Rectangle 45.png";
import "../../Styles/event.scss";
import {motion} from "framer-motion";

const Event = () => {
    const imgVariant = {
        hidden: {
            scale: 1.3
        },
        visible: {
            scale: 1,
            transition: {
                duration: 4, ease: "easeInOut"
            }
        }
    }
    const textVariant = {
        hidden: {
            y: "24px"
        },
        visible: {
            y: 0,
            transition: {
                duration: 2, ease: "easeInOut"
            }
        }
    }
  return (
    <div className="event">
         <hr/>
        <h1>Upcoming Events</h1>

        <div className='eventPlaceholder'>
            <div className='eventImg'>
              <motion.img src={card} alt="card"
              initial="hidden"
              whileInView="visible"
              viewport={{once: false,
            margin: "150px"}}
            
              variants={imgVariant}/>
            </div>

            <div className="eventInfo">
                <h1>Register</h1>
                <p>
                    <motion.span
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false,
                  margin: "150px"}}
                  
                    variants={textVariant}>For Our Upcoming</motion.span>
                </p>
                <p>
                    <motion.span   initial="hidden"
                    whileInView="visible"
                    viewport={{once: false,
                  margin: "150px"}}
                  
                    variants={textVariant}>healthcare sympmosium</motion.span>
                </p>
                <p>
                    <motion.span
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once: false,
                    margin: "150px"}}
                    
                      variants={textVariant}>to secure your space.</motion.span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Event;