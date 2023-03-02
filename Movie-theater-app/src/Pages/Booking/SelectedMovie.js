import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Components/context/AuthContext";
import { useLocation } from "react-router";

import "./selectedmovie.css";
import TicketSelector from "./Tickets";

function SelectedMovie() {
  const { user } = useContext(AuthContext);
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [formData, setFormData] = useState({
    name: user.username ? user.username : "",
    email: "",
    feedback: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/movies")
      .then((response) => response.json())
      .then((data) => {
        const results = data.find((movie) => movie.movieid == path);
        setMovie(results);
      });
  }, [path]);
  return (
    <div className="movie1">
      <div className="movie-container">
        <div
          className="selects"
          style={{
            backgroundImage: `url(${movie.title})`,
            filter: "blur(1px)",
            width: "600px",
            height: "800px",
            position: "relative",
          }}
        >
          <img src={movie.movieimg} alt="" />
        </div>
        <TicketSelector />
        <div className="feedback-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              disabled
              type="text"
              name="name"
              id="name"
              value={user.username ? user.username : ""}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="feedback">Message:</label>
            <input
              type="text"
              name="feedback"
              id="feedback"
              value={formData.feedback}
              onChange={handleChange}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SelectedMovie;
