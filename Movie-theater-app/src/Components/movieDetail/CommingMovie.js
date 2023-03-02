import React from "react";
import Categories from "./Categories";
import "./CommingMovies.css";

const CommingMovie = () => {
  return (
    <div>
      <h2 className="text">COOMING SOON...</h2>
      <div className="kontainer">
        <div className="coming">
          <div className="comingmovies">
            {Categories.map((cat) => {
              return (
                <div className="com" key={Math.random()}>
                  <img className="banner bord" src={cat.image} alt="" />
                  <h2>{cat.title}</h2>
                  <button className="butoni1">PREORDER NOW</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommingMovie;
