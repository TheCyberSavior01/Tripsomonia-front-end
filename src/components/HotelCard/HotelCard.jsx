import React, { useContext } from "react";
import "./HotelCard.css";
import starIcon from "../../assets/star.png";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

export default function HotelCard(props) {
  const { id, img, price, rating, text_1, text_2, text_3, text_4, title } =
    props.hotelData;

  // const navigate = useNavigate()

  // const {user} = useContext(AuthContext)

  // const handleBookingBtn = () => {
  //   if(user) {
  //     navigate('/booking')
  //   }else {
  //     navigate('/login')
  //   }
  // }

  return (
    <div className="hotel-card">
      <img src={img} className="hotel-card-img" />
      <div className="hotel-card-info">
        <h6 className="hotel-card-title">{title}</h6>
        <p className="hotel-card-text-1 hotel-card-text">{text_1}</p>
        <p className="hotel-card-text-2 hotel-card-text">{text_2}</p>
        <p className="hotel-card-text-3 hotel-card-text">{text_3}</p>
        <p className="hotel-card-text-4 hotel-card-text">{text_4}</p>
        <div className="hotel-card-final-text-group">
          <div className="rating-group">
            <img className="star-icon" src={starIcon} />
            <p className="rating">{rating}</p>
          </div>
          <p className="price">
            ${price}/<span className="hotel-card-text">night</span>
          </p>
        </div>

        <Link to="/booking">
          <button>Book now</button>
        </Link>

      </div>
    </div>
  );
}
