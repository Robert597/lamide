import React from 'react';
import "../../Styles/Contact/form.scss";

const Form = () => {
  return (
    <div className='form'>
        <h1>Fill This Form To Apply</h1>
        <form>
            <input type="text" placeholder='first and last name'/>
            <input type="text" placeholder='email'/>
            <input type="number" placeholder='number'/>
            <select name="dropdown">
                <option value="Nursing Assistant" selected>Nursing Assistant</option>
                <option value="Diploma in Health and SOcial Care"> Diploma in Health and Social care</option>
                <option value="Diploma in Pharmacy Assistant">Diploma in Pharmacy assistant</option>
                <option value="Certificate in Health Information Management">Certificate in Health Information Management</option>
                <option value="Mental Health Nursing">Mental Health Nursing</option>
                <option value="Psychology at Workplace">Psychology at Workplace</option>
                <option value="Care Certification Standard">Care Certification Standard</option>
                <option value="Cardiopulmonary Resuscitation & First aid">Cardiopulmonary Resuscitation & First aid</option>
                <option value="Psychiatric and mental health">Psychiatric & mental health</option>
                <option value="Basic Life Support">Basic Life Support</option>
                <option value="Advanced Cardiac Life Support">Advanced Cardiac Life Support</option>
                <option value="Paediatric Life Support">Paediatric Life Support</option>
                <option value="Blood Borne Pathogen">Blood Borne Pathogen</option>
            </select>
            <textarea placeholder='message'></textarea>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form;