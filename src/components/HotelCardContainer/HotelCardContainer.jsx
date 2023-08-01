import React from "react";
import "./HotelCardContainer.css";
import HotelCard from "../HotelCard/HotelCard";

export default function HotelCardContainer(props) {
  const hotelData = props.hotelData.hotelInfo;
  const { name} = props.hotelData;

  return (
    <div className="hotel-card-container">
      <h5>Stay In {name}</h5>
      <div className="hotel-card-holder">
        {hotelData.map((item) => (
          <HotelCard key={item.id} hotelData={item} />
        ))}
      </div>
    </div>
  );
}
