import React from "react";
import './Confirmation.css';
import { Link } from "react-router-dom";


export default function Confirmation() {



  return (
    <div id="orderconfirmation">
      <div id="balloon">
        <div className="balloon"></div>
        <div className="basket"></div>
        <div className="cloud"></div>
      </div>

      <div className="rentalinfo">
        <h1>Your rental has been approved!</h1>
        <p>
          We've sent you a mail with all the details. Remember to take a look at
          our "Find Us" page, so you don't have to stress about where to pick
          your rental up.
        </p>

        <p className="rentalsubtext">
          Just show your confirmation mail when you arrive and you will be
          handed your rental.
        </p>

        <Link to='/'><button>Go Back to Home Page</button></Link>
      </div>
    </div>
  );
}
