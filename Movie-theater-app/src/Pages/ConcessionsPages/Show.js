import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { FaChevronDown } from "react-icons/fa";
import { AiFillCalendar } from "react-icons/ai";
import { MdOutlineMovieFilter } from "react-icons/md";

import "./Show.css";
const genres = [
  "Action",
  "Horror",
  "Sci-Fi",
  "Drama",
  "Thriller",
  "Fantasy",
  "Romance",
  "Comedy",
];
function Show() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [searchtitle, setSearchTitle] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");
  const handleGenre = (e) => {
    setGenre(e.target.value);
    const filterMoviesByGenre = filteredMovies.filter((movie) =>
      movie.genre.includes(e.target.value)
    );
    if (filterMoviesByGenre.length > 0) {
      setMovies(filterMoviesByGenre);
    } else if (e.target.value === "all") {
      setMovies(filteredMovies);
    } else {
      setMovies(filteredMovies);
    }
  };

  const handleDate = (e) => {
    setDate(e.target.value);
    const filterMoviesByDate = filteredMovies.filter(
      (movie) =>
        new Date(movie.releasedate).toISOString().substring(0, 10) ===
        e.target.value
    );
    if (filterMoviesByDate.length > 0) {
      setMovies(filterMoviesByDate);
    } else if (e.target.value === "all") {
      setMovies(filteredMovies);
    } else {
      setMovies(filteredMovies);
    }
  };

  useEffect(() => {
    const movieData = async () => {
      setLoading(true);
      await fetch("http://localhost:3000/api/movies")
        .then((response) => response.json())
        .then((data) => {
          setMovies(data);
          setFilteredMovies(data);
          setLoading(false);
        });
    };

    movieData();
  }, []);

  return (
    <div className="nowshowing">
      <div className="nowshowing-form">
        <div className="nowshowing-form-select">
          <AiFillCalendar className="nowshowing-customIcon" />
          <select value={date} onChange={handleDate}>
            <option value="all">All</option>
            <option value="2022-05-24">May 24, 2022</option>
            <option value="2022-08-03">August 3, 2022</option>
            <option value="2022-08-19">August 19, 2022</option>
            <option value="2022-08-26">August 26, 2022</option>
            <option value="2022-08-30">August 30, 2022</option>
          </select>
          <FaChevronDown className="select-icon" />
        </div>
        <div className="nowshowing-search">
          <input
            className="nowshowing-searchBar"
            type="text"
            placeholder="Search Movie"
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>
        <div className="nowshowing-form-select">
          <MdOutlineMovieFilter className="nowshowing-customIcon" />
          <select onChange={handleGenre} value={genre}>
            <option value="all">All</option>
            {genres.map((genre, i) => (
              <option key={i} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <FaChevronDown className="select-icon" />
        </div>
      </div>

      <div className="nowshowing_movies">
        {loading ? (
          <h1>loading</h1>
        ) : (
          movies
            .filter((value) => {
              if (!value.title) {
                return false;
              }
              if (!searchtitle || searchtitle === "") {
                return true;
              }
              return value.title
                .toLowerCase()
                .includes(searchtitle.toLowerCase());
            })
            .map((movie) => (
              <Movie
                key={movie.movieid}
                id={movie.movieid}
                name={movie.title}
                image={movie.movieimg}
              />
            ))
        )}
      </div>
    </div>
  );
}

export default Show;
