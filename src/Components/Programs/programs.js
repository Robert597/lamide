import React from 'react';
import {diploma, certificate} from "../../Utils/courses.js";
import Program from './program.js';




const Programs = () => {
  const data = diploma.concat(certificate);
  return (
    <div className="programContainer">
        <hr/>
        <h1>Vast Opportunities For You To Learn</h1>
        <p>Take advantage of our broad courses, opportunities to increase your medical skills while learning from experts.</p>

        <div className="mainCardContainer">
        {data?.map((data) => (
      <Program data={data}/>
    ))}
        </div>

  

    </div>
  )
}

export default Programs