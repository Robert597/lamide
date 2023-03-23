import React from 'react';
import "../../Styles/Programs/exploreBanner.scss";

const Banner = ({title}) => {
  return (
    <div className="exploreBanner" id={title}>
        <h1>{`Explore Our ${title} Courses`}</h1>
        <div> <p>Learn in-demand health skills to launch your career, by learning from experts. Finish program within four months.</p></div>
       
    </div>
  )
}

export default Banner;