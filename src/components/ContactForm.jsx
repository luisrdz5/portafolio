import React from 'react';
import Mailchimp from 'react-mailchimp-form';

const ContactForm = () => {
    return (
      <div className='ContactForm' id='contact'>
        <Mailchimp
          action='https://luisrodriguezgarcia.us10.list-manage.com/subscribe/post?u=7b7c7fc4bd3c35cc9e802c8f8&amp;id=69ace37e99'
          fields={[
          {
            name: 'NAME',
            placeholder: 'Name',
            type: 'text',
            required: true
          },{
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          },{
            name: 'MESSAGE',
            placeholder: 'Message',
            type: 'text',
            required: true
          }
        ]}
          // Change predetermined language
          messages={
          {
            sending: "Sending... ",
            success: "Thank you for send a message!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Submit"
          }
        }
        />
      </div>
    )
}

export default ContactForm;