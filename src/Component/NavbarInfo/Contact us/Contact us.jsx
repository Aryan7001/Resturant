import React, { useState } from 'react';
import axios from 'axios';
import './Contact us.css'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: '',
  });

  const API_KEY = '0768d61e-16d0-4ab2-81f4-cee3bb86bfb9';
  const URL = 'https://api.web3forms.com/submit';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(URL, {
        access_key: API_KEY,
        name: formData.Name,
        email: formData.Email,
        message: formData.Message
      });
      console.log(res.data); 
      alert('Your message was sent successfully')
    } catch (error) {
      console.log(error); 
    }
  };

  return (
    <div className='main-contact'>
      <form className='main-form' onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={formData.Name}
            onChange={handleChange}
            name='Name'
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={formData.Email}
            onChange={handleChange}
            name='Email'
            required
          />
        </label>

        <label>
          Message:
          <textarea
            value={formData.Message}
            onChange={handleChange}
            name='Message'
            required
          />
        </label>

        <button type='submit'>Contact Us</button> 
      </form>
    </div>
  );
};

export default ContactUs;
