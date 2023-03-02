import React, { useState } from "react";
import "./Movie.css";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Components/context/AuthContext";

function Movie({ id, name, image }) {
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState();
  const navigate = useNavigate();

  const checkif = () => {
    if (user) {
      navigate(`../../${id}/moviedetails`);
    } else {
      showModalHandler();
    }
  };

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }
  return (
    <div className="movie-contanier">
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("${image}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="middle">
          <h2 className="movie_title">{name}</h2>
          <button className="movie-button" onClick={checkif}>
            Show Movie
          </button>
        </div>
      </div>
      {showModal && <Modal text="Are you sure?" onClose={closeModalHandler} />}
    </div>
  );
}

export default Movie;
