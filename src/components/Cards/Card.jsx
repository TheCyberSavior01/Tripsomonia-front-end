import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  const {id, name, imgUrl } = props.item;

  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url(${imgUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Link to={`/details/${id}`}>
      <div className="card" style={bgStyle}>
        <h4 className="card-title">{name}</h4>
      </div>
    </Link>
  );
}
