import React, { useState } from 'react';
import './Reservation.css';
import axios from 'axios';

const Reservation = () => {
  const API_KEY = '0768d61e-16d0-4ab2-81f4-cee3bb86bfb9';
  const URL = 'https://api.web3forms.com/submit';

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    gmail: '',
    time: '',
    people: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name} on ${formData.date} at ${formData.time} for ${formData.people} people.`);

    try {
      const res = await axios.post(URL, {
        access_key: API_KEY,
        message: 'Your table is booked',
        name: formData.name,
        date: formData.date,
        email: formData.gmail,
        time: formData.time,
        people: formData.people,
      });
      console.log(res.data);
    } catch (error) {
      alert('There was an error!');
    }

    setFormData({
      name: '',
      date: '',
      gmail: '',
      time: '',
      people: 1,
    });
  };

  return (
    <div className='reservation-background'>
      <div className='reservation-title'>
        <h1>Book your <span>table now</span></h1>
      </div>

      <div className='reservation-form-wrapper'>
        <form onSubmit={handleSubmit} className='reservation-form'>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Date:
            <input type="date" name="date" value={formData.date} onChange={handleChange} required/>
          </label>

          <label>
            Gmail:
            <input
              type="email"
              name="gmail"
              value={formData.gmail}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Time:
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Number of People:
            <input
              type="number"
              name="people"
              value={formData.people}
              onChange={handleChange}
              min="1"
              required
            />
          </label>

          <button type="submit">Book a Table</button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
