import React from "react";
import './App.css';
import AddEvent from "./components/AddEvent";
import EditEventDetails from "./components/EditEventDetails";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventList from "./components/EventList";
import Header from "./components/Header";
import EditUserDetails from "./components/EditUserDetails";
import Admin from "./components/Admin";
import Home from "./components/Home";


function App() {
  return (
    
    <Router>
        <Header/>
      <Routes>
        
        <Route path='' exact element={<Home/>}/>
        <Route path="/edituser" element={<EditUserDetails/>} />
        <Route path="/EventList" element={<EventList/>} />
        <Route path="/update/:id" element={<EditEventDetails/>} />
        <Route path="/add" element={<AddEvent/>} />
        <Route path="/admin" element={<Admin/>} />


      </Routes>
    </Router>
   
  );
}
export default App;