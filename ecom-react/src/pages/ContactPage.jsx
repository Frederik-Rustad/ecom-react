import React, { useState } from 'react';
import NavComponent from '../components/NavComponent';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();    
    console.log('Form submitted:', { name, email, message });
    setSubmitted(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <NavComponent />
        <div className="col-md-8">
          <h1>Contact Us</h1>
          {submitted ? (
            <div className="alert alert-success" role="alert">
              Thank you for your message! We will get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
