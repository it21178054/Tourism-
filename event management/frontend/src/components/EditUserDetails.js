import React, { useEffect, useState } from 'react';
//import '../Style/register2.css';
import axios from 'axios';
import { useParams } from "react-router-dom";
import 'C:/Users/januk/Desktop/Fullstack/event management/frontend/src/Style/Form2.css'

export default function EditUserDetails() {
  const param = useParams();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [count, setCount] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  useEffect(() => {
    function loadUser() {
      axios.get('http://localhost:8010/Event/644b70c327941eedcb07ae49')
        .then((response) => {
          setName(response.data.Event.name);
          setDate(response.data.Event.date);
          setPlace(response.data.Event.place);
          setCount(response.data.Event.count);
          setEmail(response.data.Event.email);
          setTelephone(response.data.Event.telephone);
        })
        .catch((error) => {
          alert(error.message);
        })
    }
    loadUser();
  }, []);

  function onSubmit(e) {
    e.preventDefault();

    const newBooking = {
      name,
      date,
      place,
      count,
      email,
      telephone
    }

    axios.put('http://localhost:8010/Event/update/644b70c327941eedcb07ae49', newBooking)
      .then(() => {
        alert("Updated Successfully!!!");
        window.location = "/";
      })
      .catch((error) => {
        alert(error.message);
      })
  }

  return (
    <div className="container">
      <form id="editform" onSubmit={onSubmit}>
        <h3>Update Event Booking Details</h3>
        <br></br>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Date:</label>
          <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
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
          <button type="submit" className='update-btn'>UPDATE</button>
        </div>
      </form>
    </div>
  );
}
