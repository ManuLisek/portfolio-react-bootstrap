import React, { useState, useContext } from 'react';
import { LangContext } from '../Context/LangContext';
import emailjs from 'emailjs-com';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Github,
  Linkedin,
} from '@styled-icons/simple-icons';

function Contact() {

  const [lang] = useContext(LangContext);
  const [isFormSended, setIsFormSended] = useState(false);
  const [isError, setIsError] = useState(false);
  const initialValues = { email: '', name: '', message: '' };
  const contactSchema = Yup.object().shape({
    email: Yup.string()
      .email('Podany email jest nieprawidłowy')
      .required('Wpisz swój adres email'),
    name: Yup.string()
      .required('Wpisz swoje imię'),
    message: Yup.string()
      .required('Nie wstydź się, przynajmniej się przywitaj :)'),
  });

  const sendEmail = (values, resetForm) => {
    setIsFormSended(true);
    emailjs
      .send('service_jzma6o4', 'template_t70kuwt', values, 'user_Ye5hZOPBDx3UqyTeAcEsp')
      .then(() => {
        setIsError(false);
        resetForm();
      }, () => {
        setIsError(true);
      });
  };

  return (
    <section id="contact" className="bg-dark ">
      <div className="container">
        <div className="wrapper">
          <div className="row no-gutters">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="contact-wrap w-100 p-md-5 p-4 py-5">
                <Formik
                  initialValues={initialValues}
                  validationSchema={contactSchema}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    const timeOut = setTimeout(() => {
                      setSubmitting(false);
                      clearTimeout(timeOut);
                    }, 1500);
                    sendEmail(values, resetForm);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => {
                    return (
                      <form method="POST" id="contactForm" name="contactForm" className="contactForm" noValidate="novalidate" onSubmit={handleSubmit} >
                        <h3 className="mb-4">{lang.contact.writeMe.title}</h3>
                        {isFormSended
                          ? (isSubmitting
                            ? <div className="mb-4">{lang.contact.writeMe.subtitleSending}</div>
                            : (isError
                              ? <div className="mb-4 text-danger">{lang.contact.writeMe.subtitleError}</div>
                              : <div className="mb-4">{lang.contact.writeMe.subtitleSuccess}</div>))
                          : <div className="mb-4">{lang.contact.writeMe.subtitle}</div>}
                        <div className="row">
                          <div className="col-md-12 mb-1">
                            <div className="form-group">
                              <input
                                type="email"
                                autoComplete="new-password"
                                className={`form-control border-2 ${touched.email ? (errors.email ? 'border-danger' : 'border-success') : ''}`}
                                name="email"
                                id="email"
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                              />
                              <p className="text-danger">{errors.email && touched.email && errors.email}</p>
                            </div>
                          </div>
                          <div className="col-md-12 mb-1">
                            <div className="form-group">
                              <input
                                type="text"
                                autoComplete="new-password"
                                className={`form-control border-2 ${touched.name ? (errors.name ? 'border-danger' : 'border-success') : ''}`}
                                name="name"
                                id="name"
                                placeholder="Imię"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                              />
                              <p className="text-danger">{errors.name && touched.name && errors.name}</p>
                            </div>
                          </div>
                          <div className="col-md-12 mb-1">
                            <div className="form-group">
                              <textarea
                                name="message"
                                className={`form-control border-2 ${touched.message ? (errors.message ? 'border-danger' : 'border-success') : ''}`}
                                id="message"
                                cols="30"
                                rows="6"
                                placeholder="Wiadomość"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                              ></textarea>
                              <p className="text-danger">{errors.message && touched.message && errors.message}</p>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{lang.contact.writeMe.buttonMessage}</button>
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    );
                  }}
                </Formik>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch ">
              <div className="info-wrap w-100 p-md-5 p-4 py-5 img">
                <h3 className="mb-4">{lang.contact.contactInformations.title}</h3>
                <p className="mb-4">{lang.contact.contactInformations.subtitle}</p>
                <div className="w-50">
                  <div className="w-25 mb-5">
                    <Github color={'#ba8f59'} />
                  </div>
                  <div className="w-25 mb-5">
                    <Linkedin color={'#ba8f59'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;