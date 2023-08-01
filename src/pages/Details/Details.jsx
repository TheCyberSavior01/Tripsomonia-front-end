import React from "react";
import './Details.css';
import HotelCardContainer from "../../components/HotelCardContainer/HotelCardContainer";
import { useLoaderData } from "react-router-dom";

export default function Details() {
    const hotelData = useLoaderData()

    return (
        <div className="details">
            <HotelCardContainer hotelData = {hotelData}/>
        </div>
    )
}