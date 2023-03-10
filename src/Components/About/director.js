import React from 'react';
import director from "../../Assets/Rectangle 21 (10).png";
import "../../Styles/About/director.scss";

const Director = () => {
  return (
    <div className='director'>
        <h1>Director's Statement</h1> 
        <img src={director} alt="director"/>
        <p>Director’s statement goes here, underneath director’s image. text should fill the box such that the spaces surrounding the text is not less than 3px c</p>
    </div>
  )
}

export default Director