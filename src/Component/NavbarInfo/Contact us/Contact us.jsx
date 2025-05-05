import React, { useState } from 'react';
import axios from 'axios';
import './Contact us.css'; 

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(URL, {
        access_key: API_KEY,
        name: formData.Name,
        email: formData.Email,
        message: formData.Message,
      });

      alert('Your message was sent successfully!');
      console.log(res.data);

      // Optional: Reset form after submission
      setFormData({ Name: '', Email: '', Message: '' });
    } catch (error) {
      alert('Something went wrong. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className='main-contact'>
      <form className='main-form' onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </label>

        <label>
          Message:
          <textarea
            name="Message"
            value={formData.Message}
            onChange={handleChange}
            placeholder="Write your message"
            rows="5"
            required
          />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
