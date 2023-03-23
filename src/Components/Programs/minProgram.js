import React from 'react';
import check from "../../Assets/Checkmark.svg";
import clock from "../../Assets/Delivery Time.svg";
import { useNavigate } from 'react-router-dom';

const MinProgram = ({course}) => {
    const navigate = useNavigate();
  return (
    <div className='minProgs'>
        <div className="progImage">
            <img src={course?.image} alt="course image"/>
        </div>
        <div className='progInfo'>
            <h2>&#8358;{course?.price}</h2>
            <h1>{course?.title}</h1>
            <p>{course?.detail}</p>
            <ul>
                {course?.outline.map((list) => (
                     <li><img src={check} alt="icon"/> {list}</li>
                ))}
            </ul>

            <div className='lowerPart'>
                <div className="duration"><img src={clock}  alt="icon"/> 4-12 weeks</div>

                <div className="cardBtn">
            <button className='firstBtn' onClick={() => {
                navigate(`/detail/${course?.id}`)
            }}>View Course</button>
            <button>Enroll Now</button>
        </div>
            </div>
        </div>
    </div>
  )
}

export default MinProgram