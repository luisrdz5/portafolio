import React from 'react';
import axios from 'axios';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import Recaptcha from 'react-google-recaptcha';
import * as Yup from 'yup';

const ContactForm = () => {
  console.log(`${JSON.stringify(process.env)}`);
    return (
      <div className='ContactForm'>
        <Formik
          initialValues={{
                name: '',
                email: '',
                message: '',
                recaptcha: '',
                success: false,
                }}
          validationSchema={Yup.object().shape({
                name: Yup.string().required('Full name field is required'),
                email: Yup.string()
                    .email('Invalid email')
                    .required('Email field is required'),
                message: Yup.string().required('Message field is required'),
                recaptcha: Yup.string().required('Robots are not welcome yet!'),
                })}
          onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
        >
          {({ values, touched, errors, setFieldValue, isSubmitting }) => (
            <Form>
              <input
                type="text"
                name="name"
                component="input"
                aria-label="name"
                placeholder="Full name*"
                error={touched.name && errors.name}
              />
              <ErrorMessage component={Error} name="name" />
              <input
                id="email"
                aria-label="email"
                component="input"
                type="email"
                name="email"
                placeholder="Email*"
                error={touched.email && errors.email}
              />
              <ErrorMessage component={Error} name="email" />
              <textarea
                className='ContactForm-message'
                aria-label="message"
                id="message"
                rows="8"
                name="message"
                placeholder="Message*"
                error={touched.message && errors.message}
              />
              <ErrorMessage component={Error} name="message" />
              {values.name && values.email && values.message && (
              <FastField
                component={Recaptcha}
                sitekey={process.env.GATSBY_PORTFOLIO_RECAPTCHA_KEY}
                name="recaptcha"
                onChange={value => setFieldValue('recaptcha', value)}
              />
                )}
              {values.success && (
                <h4>Your message has been successfully sent, I will get back to you ASAP!</h4>
                )}
              <input type="submit" disabled={isSubmitting} name='Submit' className='Submit' />
            </Form>
                )}
        </Formik>
      </div>
    )
}

export default ContactForm;