import React from 'react';
import data from '../../Utils/courses';
import MinProgram from './minProgram';
import "../../Styles/Programs/minProgram.scss";

const MinPrograms = () => {
  return (
    <div className='minprog'>
        {data?.map((program) => (
          <MinProgram course={program}/>
        ))}
    </div>
  )
}

export default MinPrograms