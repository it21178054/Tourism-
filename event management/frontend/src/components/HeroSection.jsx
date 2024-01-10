import React from "react";
import "../App.css";
import { Button } from "./Button";
import "C:/Users/januk/Desktop/Fullstack/event management/frontend/src/Style/HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video autoplay muted loop class="video-background">
        <source src="/videos/video-1.mp4" type="video/mp4" />
      </video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          BOOK NOW!
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
