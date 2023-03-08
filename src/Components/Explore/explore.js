import React from 'react';
import "../../Styles/Programs/explore.scss";

const Explore = () => {
  return (
    <div className='explore'>
        <h1>All Categories</h1>
        <div className="course-cont">
        <div className='diploma'>
            <p>Diploma Courses</p>
            <button>Explore</button>
        </div>

        <div className='certificate'>
            <p>Certificate Courses</p>
            <button>Explore</button>
        </div>
        </div>
    </div>
  )
}

export default Explore;