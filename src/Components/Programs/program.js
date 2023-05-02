import React from 'react';
import check from "../../Assets/Checkmark.svg";
import "../../Styles/Home/program.scss";
import {useNavigate} from "react-router-dom";

const Program = ({data}) => {
    const navigate = useNavigate();
  return (
    <div className='cardContainer'>
        <div className='cardImgContainer'>
            <img src={data?.image} alt="no"/>
        </div>
        <h1>{data?.title}</h1>
        <p>{data?.detail}</p>

        <ul className='cardOutlineContainer'>
            {
                data?.outline.map((list) => (
                    <li><img src={check} alt="icon"/> {list}</li>
                ))
            }
        </ul>
        <div className="cardBtn">
            <button className='firstBtn' onClick={() => {
                navigate(`/detail/${data?.id}`)
            }}>View Course</button>
            <button onClick={() => {
                navigate(`/register`)
            }}>Enroll Now</button>
        </div>
        <div className="price">&#8358;{data?.price}</div>
    </div>
  )
}

export default Program