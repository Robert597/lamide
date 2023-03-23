import React from 'react';
import europe from "../../Assets/europe.svg";
import usa from "../../Assets/usa.svg";
import canada from "../../Assets/canada.svg";
import uk from "../../Assets/uk.svg";
import australia from "../../Assets/australia.svg";
import Chat from "../../Assets/Chat Message.svg";
import Call from "../../Assets/Call male.svg";
import {useNavigate} from "react-router-dom"
import "../../Styles/Home/accreditation.scss";

const Accreditation = () => {
    const navigate = useNavigate();
  return (
    <div className="accreditation">
         <hr/>
        <h1>Accreditation</h1>
        <p>All our certifications are valid in:</p>

        <div className="flags">
            <div className='flag'>
                <img src={europe} alt="europe"/>
                <p>Europe</p> 
            </div>
            <div className='flag'>
                <img src={usa} alt="europe"/>
                <p>Usa</p> 
            </div>
            <div className='flag'>
                <img src={canada} alt="europe"/>
                <p>Canada</p> 
            </div>
            <div className='flag'>
                <img src={uk} alt="europe"/>
                <p>UK</p> 
            </div>
            <div className='flag'>
                <img src={australia} alt="europe"/>
                <p>Australia</p> 
            </div>
        </div>

        <div className='AccredInfo'>
            <p>Talk to an agent, Accelerate your travelling process, safely.</p>

            <div className="AccredButtons">
    <button onClick={() => navigate("/contact")}>
        <img src={Call} alt="call"/>
        Contact Us Now
    </button>
    <button>
        <img src={Chat} alt="call"/>

        <a href='https://wa.me/+2348112320218' target="_blank" rel="noreferrer">
        Chat With us
        </a>
    </button>
            </div>
        </div>
    </div>
  )
}

export default Accreditation