import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className='contact-container'>

        <div className="one">
          <div className="one-one">
          <h3>Contact Us</h3>
          </div>
        </div>
        

        <h3 className='ci'>Contact Information</h3>

        <div className='two'>
          <div className='sub-two'>
            <i className="ri-phone-line"></i>
            <p>+91 7480810412</p>
          </div>
          <div className='sub-two'>
            <i className="ri-mail-line"></i>
            <p>support@zaptro.com</p>
          </div>
          <div className='sub-two'>
            <i className="ri-map-pin-line"></i>
            <p>Bengaluru, 560103, Karnataka, India</p>
          </div>
        </div>

        <div className='form-container'>
          <div className='fc-left'>
            <h2>Form</h2>
            <h4>Get in Touch !!</h4>
          </div>

          <div className='fc-right'>
            <input type="text" name="" id="" placeholder='Email' />
            <input type="tel" name="" id="" placeholder='Phone' />
            <input type="text" name="" id="" placeholder='Name' />
            <input type="text" name="" id="" placeholder='Message' />
            <button className='fc-button'>Submit</button>
          </div>

        </div>

        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220629.68678885166!2d77.62197175!3d12.987977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1781708002587!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bangalore Location"
          ></iframe>
        </div>







      </div>
    </>
  )
}

export default Contact
