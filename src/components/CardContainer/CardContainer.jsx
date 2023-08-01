import React from "react";
import "./CardContainer.css";
import Card from "../Cards/Card";

export default function CardContainer(props) {
  const data = props.data;

  return (
    <div className="card-container">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
