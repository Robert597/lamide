import React from 'react';
import Program from './program';
import "../../Styles/Programs/minProgram.scss";

const MinPrograms = ({data}) => {
  return (
    <div className='minprog'>
        {data?.map((program) => (
          <Program data={program}/>
        ))}
    </div>
  )
}

export default MinPrograms