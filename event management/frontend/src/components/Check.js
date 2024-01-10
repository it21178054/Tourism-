import React, { useState } from 'react';
import axios from 'axios';

export default function Check() {

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [place, setPlace] = useState("");
    const [availability, setAvailability] = useState(false);

    function check(e) {
        e.preventDefault();
        const EventBooking = {
            name,
            date,
            place
        }
      
        axios.post("http://localhost:8010/Event/check", EventBooking)
            .then((response) => {
                if(response.data.available) {
                    setAvailability(true);
                } else {
                    alert("No availability for the selected date and place. Please try again.");
                }
            })
            .catch(() => {
                alert("Failed to check availability. Please try again.");
            })
    }

    return (
        <div>
            <form onSubmit={check}>
                <div className="item">
                    <label htmlFor="name">Name<span>*</span></label>
                    <input 
                        required
                        id="name" 
                        type="text" 
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>
                <div className="item">
                    <label htmlFor="date">Date<span>*</span></label>
                    <input 
                        type="date" 
                        id="date" 
                        name="date" 
                        required
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}
                    />
                </div>
                <div className="item">
                    <label htmlFor="place">Place<span>*</span></label>
                    <input 
                        type="text" 
                        id="place" 
                        name="place" 
                        required
                        onChange={(e) => {
                            setPlace(e.target.value);
                        }}
                    />
                </div>
                <button type="submit">Check Availability</button>
            </form>
        </div>
    );
}
