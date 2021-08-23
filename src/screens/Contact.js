import React from 'react';

const Contact = () => {
  return (
    <div className='greeting-container'>
      <h1 className='greeting'>Hello</h1>
      <span className='greeting-text'>
        I would like to hear from you. We can also work together.
      </span>

      <div>
        <i className='far fa-2x fa-envelope fa-icon'></i>
        <p className='info'>gbejula@gmail.com</p>
      </div>
      <div>
        <i className='fas fa-2x fa-mobile-alt fa-icon'></i>
        <p className='info'>+2347032626115</p>
      </div>
    </div>
  );
};

export default Contact;
