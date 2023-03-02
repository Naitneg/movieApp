import React from "react";
import MovieSchedule from "../../Components/movieDetail/ScheduleList";
import "./Booking.css";
import Navbar from "../../Components/navbar/NavBar";
import Header from "../ConcessionsPages/Header";

function Booking() {
  return (
    <Navbar>
      <Header />
      <div className="Booking-contanier">
        <MovieSchedule />
      </div>
    </Navbar>
  );
}
export default Booking;
