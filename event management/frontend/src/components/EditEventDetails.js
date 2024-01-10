import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'C:/Users/januk/Desktop/Fullstack/event management/frontend/src/Style/Form2.css'


export default function EditEventDetails() {
  const param = useParams();

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');

  useEffect(() => {
    function loadUser(){
    axios.get(`http://localhost:8010/event/${param.id}`).then((response) => {
      const { name, date, place, count, email, telephone } = response.data.event;
      setName(name);
      setDate(date);
      setPlace(place);
      setCount(count);
      setEmail(email);
      setTelephone(telephone);
    }).catch((error) => {
      alert(error.message);
    });
  }
  loadUser();
},
  []);

  function onSubmit(e) {
    e.preventDefault();

    const newBooking = {
      name,
      date,
      place,
      count,
      email,
      telephone,
    }

    axios.put(`http://localhost:8010/event/update/${param.id}`, newBooking).then(() => {
      alert('Updated successfully!');
      window.location = '/admin';
    }).catch((error) => {
      alert(error.message);
    });
  }

  return (
    <div className="container">
      <form id="editform" onSubmit={onSubmit}>
        <h3>Update Event Booking Details</h3>
        <br />
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="datetime-local" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Place:</label>
          <input type="text" name="place" value={place} onChange={(e) => setPlace(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Count:</label>
          <input type="number" name="count" value={count} onChange={(e) => setCount(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Telephone:</label>
          <input type="tel" name="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
        </div>
        <div className="btn-block">
          <button type="submit" className="update-btn">UPDATE</button>
        </div>
      </form>
    </div>
  );
}
