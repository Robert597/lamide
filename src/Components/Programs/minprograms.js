import React from 'react';
import MinProgram from './minProgram';
import "../../Styles/Programs/minProgram.scss";

const MinPrograms = ({data}) => {
  return (
    <div className='minprog'>
        {data?.map((program) => (
          <MinProgram course={program}/>
        ))}
    </div>
  )
}

export default MinPrograms