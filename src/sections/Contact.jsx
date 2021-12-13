import React from 'react';
import {
  Github,
  Linkedin,
} from '@styled-icons/simple-icons';

function Contact() {

  return (
    <section id="contact" className="bg-dark ">
      <div className="container">
        <div className="wrapper">
          <div className="row no-gutters">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="contact-wrap w-100 p-md-5 p-4 py-5">
                <form method="POST" id="contactForm" name="contactForm" className="contactForm" noValidate="novalidate" >
                  <h3 className="mb-4">Napisz do mnie</h3>
                  <div className="mb-4">Wypełnij formularz żeby się ze mną skontaktować</div>
                  <div className="row">
                    <div className="col-md-12 mb-1">
                      <div className="form-group">
                        <input
                          type="email"
                          className={`form-control`}
                          name="email"
                          id="email"
                          placeholder='Wpisz swój adres email'
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-1">
                      <div className="form-group">
                        <input
                          type="text"
                          className={`form-control`}
                          name="name"
                          id="name"
                          placeholder='Wpisz swoje imię'
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-1">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className={`form-control`}
                          id="message"
                          cols="30"
                          rows="6"
                          placeholder='Wpisz swoje imię'
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <button type="submit" className="btn btn-primary">Wyślij wiadomość</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch ">
              <div className="info-wrap w-100 p-md-5 p-4 py-5 img">
                <h3 className="mb-4">Informacje kontaktowe</h3>
                <p className="mb-4">Dowiedz się o mnie więcej lub skontaktuj się w inny sposób.</p>
                <div className="w-50">
                  <div className="w-25 mb-5">
                    <Github className="text-primary" />
                  </div>
                  <div className="w-25 mb-5">
                    <Linkedin className="text-primary" />
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