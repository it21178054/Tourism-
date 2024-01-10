import React, { useState } from 'react';
import 'C:/Users/januk/Desktop/Fullstack/event management/frontend/src/Style/AddEvent.css'
import 'C:/Users/januk/Desktop/Fullstack/event management/frontend/src/Style/Form.css'
import Logo from '../Images/Logo.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';

export default function AddEvent() {

const [name, setName] = useState("");
const [date, setDate] = useState("");
const [place, setPlace] = useState("");
const [count, setCount] = useState("");
const [email, setEmail] = useState("");
const [telephone, setTelephone] = useState("");

function sendData(e) {
e.preventDefault();


const newBooking = {
  name,
  date,
  place,
  count,
  email,
  telephone
}

axios.post("http://localhost:8010/Event/add", newBooking)
        .then(() => {
          alert("Event booked successfully.");
        })
        .catch(() => {
          alert("Failed to book  event. Please try again.");
        })
        .finally(() => {
          const pdf = new jsPDF();
          pdf.setFontSize(12);

           // Add logo
        pdf.addImage(Logo, 'PNG', 15, 10, 30, 20);
        pdf.setFont("helvetica", "bold");
        pdf.text('Event booking Report - Detroves privet Limited', 20,30);
        pdf.setFont("helvetica", "normal");

        
          // Add name
          pdf.text('Name: ' + name, 20, 50);
          
          // Create a new date object
        var today = new Date();

        // Format the date as a string
        var dateString = today.toLocaleDateString();

        // Add the date to the PDF document
        pdf.text('Booking date: ' + dateString, 20, 60);

          
          // Add place
          pdf.text('Pick-up place: ' + place, 20, 70);
    
          // Add count
          pdf.text('Number of Participants: ' + count, 20, 80);
    
          // Add email
          pdf.text('Email: ' + email, 20, 90);
    
          // Add telephone
          pdf.text('Phone Number: ' + telephone, 20, 100);
    
          pdf.save('Event Booking-report.pdf');
        });
      } 

      return (
        <div className="container">
          <form id='addform' onSubmit={sendData}>

            <h3>Add Event Booking</h3>
    
            <div className="form-group">
              <label>Name<span>*</span></label>
              <input
               required
                type="text"
                className="form-control"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
          <label  htmlFor="arr-datetime">Date</label>
          <input
             type="datetime-local" 
            className="form-control"
            placeholder="Enter date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Place</label>
          <input id="Pick-up-place"
            type="text"
            name="Pick-up-place" 
            className="form-control"
            placeholder="Enter place"
            required
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Number of Participants</label>
          <input
            required
            type="text"
            className="form-control"
            placeholder="Enter count"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </div>

        <div className="form-group">
  <label>Email</label>
  <input
    type="email"
    className="form-control"
    pattern=".+@beststartupever\.com"
    placeholder="username@beststartupever.com"
    title="Please provide only a Best Startup Ever corporate email address"
    //value={email}
    onChange={(e) => setEmail(e.target.value)}
    required // add required attribute for HTML5 validation
  />
</div>


        <div className="form-group">
          <label for="outlined-disabled">Phone Number</label>
          <input
            required
            id="Utel" 
            type="tel" 
            className="form-control"
            placeholder="Enter phone number"
            pattern="[7-9]{1}[0-9]{9}" 
            title="Phone number with 7-9 and remaing 9 digit with 0-9"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
         
        <div className="btn-block">
        <button type="submit" className="btn btn-primary btn-block">
        
        Submit
        </button>



        </div>

       
      </form>
     <div className='show'><button><Link to={`/admin`} className='Event-btn'> show summary </Link></button></div>
      
    </div>

  
  );
}


