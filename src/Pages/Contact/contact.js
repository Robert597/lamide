import React from 'react'
import FAQ from '../../Components/FAQ/faq'
import Accordion from '../../Components/FAQ/accordion'
import Form from '../../Components/Form/form'
import ContactAbout from '../../Components/About/contactAbout'

const Contact = () => {
  return (
    <div className='contact'>
        <FAQ/>
        <Accordion/>
        <Form/>
        <ContactAbout/>
    </div>
  )
}

export default Contact