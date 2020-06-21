import React from 'react';
import contact from '../assets/illustrations/contact.svg';
import ContactForm from '../components/ContactForm';
import '../styles/components/Contact.styl';

const Contact = () => {

    return (
      <div className='Contact'>
        <div className='Contact-form'>
          <h1>Contact</h1>
          <ContactForm />
        </div>
        <div className='Contact-image'>
          <img src={contact} alt="I’m Luis and I’m a Full stack developer!" />
        </div>
      </div>

    )
}

export default Contact