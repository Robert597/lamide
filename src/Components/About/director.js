import React from 'react';
import director from "../../Assets/Rectangle 21 (10).png";
import "../../Styles/About/director.scss";

const Director = () => {
  return (
    <div className='director'>
        <h1>Director's Statement</h1> 
        <img src={director} alt="director"/>
        <p>I welcome you to the SFI HEALTH AND CARE. This institution is designed to handle lecture sessions for vaious health and social care diploma and certification courses which could be used for migration to USA, UK, CANADA etc on work Visa or permanent residency.
          <br/>
          <br/>
          Aided by the various quality resources at our disposal, we are commited to render prompt and efficient services.
          <br/>
          <br/>
          <b>Mr.Olusegun Ilesanmi</b>
          <br/>
          <b>Director, SFI HEALTH AND CARE</b>
        </p>
    </div>
  )
}

export default Director