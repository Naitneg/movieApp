import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./movieDetail.css";
import Navbar from "../navbar/NavBar";
import Header from "../../Pages/ConcessionsPages/Header";
import { AiFillHeart } from "react-icons/ai";
import Rate from "./Rate";
import Backdrop from "./Backdrop";
import Ratings from "./Ratings";

function MovieDetail() {
  const [movie, setMovie] = useState({});
  const [showModal, setShowModal] = useState();
  const [rates, setRates] = useState(0);
  const [percent, setPercent] = useState(0);
  const { id } = useParams();

  function showModalHandler() {
    setShowModal(true);
  }

  const closeModalHandler = useCallback(() => {
    setShowModal(false);
  }, []);

  useEffect(() => {
    const fetchSingleMovie = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/movies/${id}`);
        const movieData = await res.json();
        setMovie(movieData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSingleMovie();
  }, [id]);

  const countrating = (ratings) => {
    const rate = [...ratings];
    const array2 = rate.map((x) => x.stars);
    const sum = array2.reduce(function (a, b) {
      return a + b;
    }, 0);
    const percent1 = (sum / 5 / rate.length) * 100;
    setPercent(percent1);
    setRates(rate.length);
  };

  return (
    <Navbar>
      <Header />
      <div className="movieDetail-contanier">
        <div
          className="banner1"
          style={{
            backgroundSize: "cover",
            backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.5690651260504201) 0%, rgba(0,0,0,1) 100%),url("${movie.posterimg}")`,
            backgroundPosition: "center center",
          }}
        >
          {showModal && (
            <Rate text="Are you sure?" onClose={closeModalHandler} />
          )}
          <div className="details">
            <img className="banner ban" src={movie.movieimg} alt="" />
            <div>
              <h1 className="titulli1">{movie.title}</h1>
              <div className="rate">
                <div className="heart">
                  <AiFillHeart size={40} className="zemra" />
                  <h2>{percent ? percent.toFixed() : 0} %</h2>
                </div>
                <p>{rates} ratings...</p>
              </div>
              <div className="review">
                <h3>Add your rating & review</h3>
                <p>Your ratings matter</p>
                <button className="butoni1" onClick={showModalHandler}>
                  Rate now
                </button>
              </div>
              <div className="details1">
                <Link to={`/Booking/${id}`} className="butoni1 butt">
                  BOOK TICKET NOW
                </Link>
              </div>
            </div>
            {showModal && <Backdrop onClose={closeModalHandler}/>}
          </div>
        </div>

        <div className="movie">
          <h1>ABOUT THE MOVIE</h1>
          <h4>{movie.description}</h4>
          <div className="movie-text">
            <p>
              <span className="movie-span">Release Date </span> -{" "}
              {movie.releasedate ? movie.releasedate.substring(0, 10) : null}
            </p>
            <p>
              <span className="movie-span">Duration of the film</span> -{" "}
              {movie.duration}min
            </p>
            <p>
              <span className="movie-span">State</span> - {movie.country}
            </p>
            <p>
              <span className="movie-span">Genre</span> - {movie.genre}
            </p>
          </div>
          <div className="line"></div>
        </div>

        <Ratings getdata={countrating} />
      </div>
    </Navbar>
  );
}
export default MovieDetail;
