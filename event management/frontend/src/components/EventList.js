import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.css";
import eve1 from '../Images/eve1.jpg';
import eve2 from '../Images/eve2.jpg';
import eve3 from '../Images/eve3.jpg';
import eve4 from '../Images/eve4.jpg';
import eve5 from '../Images/eve5.jpg';
import eve6 from '../Images/eve6.jpg';
import eve7 from '../Images/eve7.jpg';
import eve8 from '../Images/eve8.jpg';
import eve9 from '../Images/eve9.jpg';
import eve10 from '../Images/eve10.jpg';
import 'C:/Users/januk/Desktop/Fullstack/event management/frontend/src/Style/search.css'
import 'C:/Users/januk/Desktop/Fullstack/event management/frontend/src/Style/EventList.css'


//import '../Style/EventList.css';
//import '../Style/search.css';

function EventList() {

  const [bookingStatus, setBookingStatus] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const handleBooking = () => {
// perform your booking action or set the state to update UI
 setBookingStatus(true);
 window.location ="/add";
 };
  
  const Events = [
    {
      make: 'Dalada perahara',
      year: 2023,
      image: eve1,
      description: 'The Sacred Tooth Relic, which is housed at the Temple of the Sacred Tooth Relic in the city of Kandy, is being considered and worshipped as the living Lord Buddha. For this very reason, there are daily, weekly and annual poojas and rituals. Dalada Perahera famously known as the Kandy Esala Perahera held in the month of Esala (July) annually is among them.',
      helper: 'Jagath thissa kumara',
      phone: +9489034670,
      location: 'nuwara',
      date:'2030.07.06',
      
    },
    {
      make: 'Holi Fwstival',
      
      year: 2023,
      image: eve2,
      description: 'Holi is considered as one of the most revered and celebrated festivals of India and it is celebrated in almost every part of the country. It is also sometimes called as the “festival of love” as on this day people get to unite together forgetting all resentments and all types of bad feeling towards each other.',
      helper: 'Darshana Kalana Kumara',
      phone: +9489087325,
      location: 'colombo',
      date:'2030.08.06',
      
    },
    {
      make: 'vesak Festival',
      
      year: 2023,
      image: eve3,
      description: 'Wesak, also spelled Vesak, Sanskrit Vaishakha, Pali Vesakha, most important of the Theravada Buddhist festivals, commemorating the birth, enlightenment, and death of the Buddha. The event is observed on the full-moon day of the lunar month Vesakha, which falls in April or May. ',
      helper: 'Sandaml priyankara',
      phone: +948905890,
      location: 'gampaha',
      date:'2023.05.06',
     
    },
    {
      make: 'Christmas',
      year: 2023,
      image: eve10,
      description: 'Christmas, Christian festival celebrating the birth of Jesus. The English term Christmas (“mass on Christ’s day”) is of fairly recent origin. The earlier term Yule may have derived from the Germanic jōl or the Anglo-Saxon geōl, which referred to the feast of the winter solstice.  ',
      helper: 'John Doe',
      phone: +9477542313,
      location: 'katuwapitiya',
      date:'2030.12.06',
      
    },
    {
      make: 'Mask festival',
      year: 2023,
      image: eve6,
      description: 'The masked parade of Carnevale di Venezia or the Carnival of Venice, held in February, is a big hit with tourists. The procession begins from the hallowed St Mark’s Square. Participants wear imaginatively designed masks and colourful costumes.',
      helper: 'Jane Smith',
      phone: '+1 555-555-5555',
      location: 'malabe',
     
    },
    {
      make: 'Nadagama',
      
      year: 2023,
      image: eve7,
      description: 'An operatic theatrice, the Nadagama represents a Creative departure from earlier theatrical enactments such as processional displays, group dances performed by an ebsemble of dancing Girls, ritualperformances which included dramatic interludes or group singing.',
      helper: 'David Lee',
      phone: '+1 555-555-5555',
      location: 'panadura',
      date:'2023.2.06',
      
    },
    {
      make: 'Poson Festival',
      year: 2023,
      image: eve8,
      description: 'Festival. Poson is celebrated to commemorate the introduction of Buddhism to Sri Lanka by Mahinda in 236 BC. The focal point of the religious festival is the Buddhist monastic complex on the mountain of Mihintale, where Arahath Mahinda Thero preached Buddhism to one of the kings, king Devanampiyatissa, of Sri Lanka.',
      helper: 'Samantha Brown',
      phone: '+1 555-555-5555',
      location: 'anuradapura',
      date:'2030.06.06',
      
    },
    {
        make: 'Ramazan Festival',
        year: 2023,
        image: eve9,
        description: 'Eid-ul-Fitr which marks the culmination of the fasting month of Ramzan or Ramadan will be celebrated in India on Saturday, 22 April 2023, as the moon has been sighted on Friday, 21 April 2023, in many parts of the country including, Bihar, Lucknow, Hyderabad.',
        helper: 'Juan Garcia',
        phone: '+1 555-555-5555',
        location: 'colombo',
        date:'2023.07.06',
        
    },
    {
        make: 'New Year Festival',
        
        year: 2023,
        image: eve9,
        description: 'Many countries in the world celebrate the new year in 1st of January. Yet there are several calendars around the world that celebrates different days to welcome New Year. In Sri Lanka, new year celebrations start on 13th of April and end in 14th of the month. Sinhala and Tamil New Year. ',
        helper: 'Emily Davis',
        phone: '+1 555-555-5555',
        location: 'kandy',
        date:'2023.04.06',
       
    },
    {
        make: 'Lantern Festival',
        year: 2023,
        image: eve4,
        description: 'Lantern Festival, also called Yuan Xiao Festival, holiday celebrated in China and other Asian countries that honours deceased ancestors on the 15th day of the first month (Yuan) of the lunar calendar. The Lantern Festival aims to promote reconciliation, peace, and forgiveness. ',
       helper: 'Priya Patel',
        phone: '+1 555-555-5555',
        location: 'peradeniya',
        date:'2023.07.06',
        
    },
    

  ];

  // Filter the list of Events based on the search term
  const filteredEvents = Events.filter(Event =>
    Event.make.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  return (
    <div className="Event-list-container">
      <div className="search-wrapper">
        <input 
          type="text" 
          placeholder="Search for a Event..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="Event-list">
        {filteredEvents.map((Event, index) => (
          <div key={index} className="Event-card">
            <img className="Event-image" src={Event.image} alt={`${Event.make} `} />
            <div className="Event-details">
              <h2 className="Event-name">{`${Event.make} `}</h2>
              
              <p className="Event-description">{Event.description}</p>
              <p className="helper">{Event.helper}</p>
              <p className="phone">{Event.phone}</p>
              <p className="location">{Event.location}</p>
              <p className="date">{Event.date}</p>
              

              

              <button><Link to={`/add`} className='Event-btn'> Book Now </Link></button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;