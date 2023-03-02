import React from "react";
import "./seatslegend.css";

const SeatLegend = () => {
  return (
    <div className="seat-legend">
      <div className="available">
        <div className="color-box" />
        Available
      </div>
      <div className="sold">
        <div className="color-box" />
        Sold
      </div>
      <div className="vipsold">
        <div className="color-box" />
        VIP Sold
      </div>
    </div>
  );
};

export default SeatLegend;
