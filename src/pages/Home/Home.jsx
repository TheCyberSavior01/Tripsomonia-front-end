import React from "react";
import "./Home.css";
import CardContainer from "../../components/CardContainer/CardContainer";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const data = useLoaderData();

  const bgStyle = {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) ,url('https://iili.io/HZ9af4t.png')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="home" style={bgStyle}>
      <div className="info">
        <h1>Start Your Journey Today</h1>
        <p>
          Unleash the traveler within and begin your next odyssey with
          Tripsomnia. Your dream vacation is just a click away. Join us<br />
          as we redefine travel, one unforgettable journey at a time.
        </p>
      </div>
      <div className="trips">
        <CardContainer data={data} />
      </div>
    </div>
  );
}
