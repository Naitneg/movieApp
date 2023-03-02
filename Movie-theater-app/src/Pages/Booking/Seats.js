import React from "react";
import Navbar from "../../Components/navbar/NavBar";
import Header from "../ConcessionsPages/Header";
import SeatLegend from "./SeatsLegend";
import "./seats.css";
import SelectedMovie from "./SelectedMovie";

const SeatSelector = ({
  seats,
  selectedSeats,
  vipSeats,
  onSeatClick,
  
}) => {
  const price = selectedSeats.length * 3.99;
 
  return (
    <Navbar>
      <Header />
      <div className="seats">
        <div>
          <SelectedMovie  />
        </div>
        <div className="seat-selector">
          <div>
            <SeatLegend />
            <div className="screen">Screen</div>
          </div>
          {seats.map((row, rowIndex) => (
            <div className="seat-row" key={rowIndex}>
              {row.map((seat, seatIndex) => {
                const isSelected = selectedSeats.includes(seat);
                const isVip = vipSeats.includes(seat);
                return (
                  <button
                    key={seatIndex}
                    className={`seat ${isSelected ? "selected" : ""} ${
                      isVip ? "vip" : ""
                    } ${isVip && isSelected ? "vip-selected" : ""}`}
                    onClick={() => onSeatClick(seat)}
                  >
                    {seat}
                  </button>
                );
              })}
            </div>
          ))}
          <div className="seatcounts">
            <h3>
              Selected seats :{" "}
              <span style={{ color: "orange", fontSize: "2rem" }}>
                {selectedSeats.length}
              </span>
            </h3>
            <h3>
              Price :{" "}
              <span style={{ color: "green", fontSize: "2rem" }}>
                ${price.toFixed(2)}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default SeatSelector;
