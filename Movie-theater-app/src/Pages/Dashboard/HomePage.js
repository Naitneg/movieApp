import React from "react";
import arrow from "../img/arrrow.png";
import "./homePage.css";
import { useNavigate } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import CommingMovie from "../../Components/movieDetail/CommingMovie";
import Offer from "../Offers/Offer";
import Navbar from "../../Components/navbar/NavBar";
import Header from "../ConcessionsPages/Header";

function Homepages() {
  let navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Booking");
  };

  return (
    <div className="home7">
      <Navbar>
        <Header />
        <div className="homepage">
          <div className="infos">
            <h1 className="homepage-title">BLACK ADAM</h1>
            <p className="homepage-tekst">
              Nearly 5,000 years after he was bestowed with the almighty powers
              of the Egyptian gods-and imprisoned just as quickly-Black Adam
              (Johnson) is freed from his earthly tomb, ready to unleash his
              unique form of justice on the modern world.
            </p>
            <button onClick={handleNavigate} className="homepage-buton">
              BOOK TICKET NOW
            </button>
          </div>
        </div>

        <div className="movie-list-container">
          <h1 className="movie-list-title">GALLERY</h1>
          <img className="galeria" src={arrow} alt="gallery" />
          <div className="movie-list-wrapper">
            <div className="movie-list">
              <Carousel itemsToShow={5}>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="https://m.media-amazon.com/images/M/MV5BMDcyZjU4OTQtNzBiOC00NGFlLThlMWItZDVlYTU4MjBlYjE5XkEyXkFqcGdeQWFybm8@._V1_.jpg"
                    alt="gallery"
                  />
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="https://www.denofgeek.com/wp-content/uploads/2022/07/black-adam-dwayne-johnson.jpg"
                    alt="gallery"
                  />
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="https://static.hitek.fr/img/actualite/ill_m/726221990/blackadambandeannoncewarner.png"
                    alt="gallery"
                  />
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="https://m.media-amazon.com/images/M/MV5BNTAzYzk0MzktY2Y2MC00YWIwLTllODktYWYwNjI3ZjY3NGY5XkEyXkFqcGdeQWpnYW1i._V1_QL75_UY281_CR0,0,500,281_.jpg"
                    alt="gallery"
                  />
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="https://imageio.forbes.com/specials-images/imageserve/630e74cd45ded0a511ff61b1/2022-Comic-Con-International--San-Diego---Cosplay-And-General-Atmosphere/960x0.jpg?format=jpg&width=960"
                    alt="gallery"
                  />
                </div>
                <div className="movie-list-item">
                  <img
                    className="movie-list-item-img"
                    src="https://media1.popsugar-assets.com/files/thumbor/yirFsZurIYjIULA5YC4TOpsNwpU/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2022/09/09/682/n/1922283/62b22e77631b5a69ef2876.78389369_/i/black-adam-movie-details.jpg"
                    alt="gallery"
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <CommingMovie />
        <Offer />
      </Navbar>
    </div>
  );
}

export default Homepages;
