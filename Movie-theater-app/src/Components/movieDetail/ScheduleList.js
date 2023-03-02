import "./scheduleList.css";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
const MovieSchedule = () => {
  const [data, setData] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [genre, setGenre] = useState("");

  const handleGenre = (e) => {
    setGenre(e.target.value);
    const filterMoviesByGenre = filteredMovies.filter((movie) =>
      movie.genre.includes(e.target.value)
    );
    if (filterMoviesByGenre.length > 0) {
      setData(filterMoviesByGenre);
    } else if (e.target.value === "all") {
      setData(filteredMovies);
    } else {
      setData(filteredMovies);
    }
  };

  useEffect(() => {
    const movieData = async () => {
      await fetch("http://localhost:3000/api/movies")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setFilteredMovies(data);
        });
    };
    movieData();
  }, []);

  return (
    <div className="schedule">
      <div className="movie-schedule">
        <div className="movie-schedule-form-select">
          <h3 style={{ color: "white" }}>Select Day</h3>
          <select>
            <option value="default">All</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          <FaChevronDown className="select-icon" />
        </div>
        <div className="movie-schedule-form-select">
          <h3 style={{ color: "white" }}>Select Cinema</h3>
          <select>
            <option value="default">All</option>
            <option value="Prishtine">Prishtinë</option>
            <option value="Mitrovice">Mitrovice</option>
          </select>
          <FaChevronDown className="select-icon" />
        </div>
        <div className="movie-schedule-form-select">
          <h3 style={{ color: "white" }}>Select Genre</h3>
          <select onChange={handleGenre} value={genre}>
            <option value="default">All</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Horror">Horror</option>
            <option value="Thriller">Thriller</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
          <FaChevronDown className="select-icon" />
        </div>
      </div>
      <div className="show-container">
        <div className="show">
          {data.map((movie, i) => {
            return (
              <div className="show-movie" key={Math.random()}>
                <img src={movie.movieimg} alt="" />
                <div className="show-movie-detail">
                  <h3>Title</h3>
                  <p>{movie.title}</p>
                  <h3>Genre</h3>
                  <p>{movie.genre}</p>
                  <h3>Description</h3>
                  <p className="description">
                    {movie.description.substring(0, 160)}
                  </p>
                </div>

                <div className="time">
                  <div>
                    <div className="days">
                      <p>Monday</p>
                      <p>Tuesday</p>
                      <p>Wednesday</p>
                      <p>Thursday</p>
                      <p>Friday</p>
                      <p>Saturday</p>
                      <p>Sunday</p>
                    </div>
                  </div>
                  <div className="time-hour-all">
                    <div className="time-hour">
                      <p>16:00 ET</p>
                      <p>20:00 ET</p>
                    </div>
                    <div className="time-hour">
                      <p>10:40 ET</p>
                      <p>16:00 ET</p>
                      <p>20:00 ET</p>
                    </div>
                    <div className="time-hour">
                      <p>10:40 ET</p>
                    </div>
                    <div className="time-hour">
                      <p>10:40 ET</p>
                      <p>16:00 ET</p>
                      <p>20:00 ET</p>
                    </div>
                    <div className="time-hour">
                      <p>10:40 ET</p>
                      <p>16:00 ET</p>
                    </div>
                    <div className="time-hour">
                      <p>10:40 ET</p>
                      <p>16:00 ET</p>
                    </div>
                    <div className="time-hour">
                      <p>10:40 ET</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieSchedule;
