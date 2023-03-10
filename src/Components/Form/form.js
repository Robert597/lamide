import React from 'react';
import "../../Styles/Contact/form.scss";

const Form = () => {
  return (
    <div className='form'>
        <h1>Contact Us</h1>
        <form>
            <input type="text" placeholder='name'/>
            <input type="text" placeholder='email'/>
            <input type="number" placeholder='number'/>
            <textarea placeholder='message'></textarea>
            <button>Send</button>
        </form>
    </div>
  )
}

export default Form;