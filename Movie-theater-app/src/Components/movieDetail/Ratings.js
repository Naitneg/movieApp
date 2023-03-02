import React, { useEffect, useState } from "react";
import "./ratings.css";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

function Ratings({ getdata }) {
  const [data, setData] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  useEffect(() => {
    fetch("http://localhost:3000/api/ratings")
      .then((response) => response.json())
      .then((data) => {
        let result = data.filter((obj) => obj.movieid == path);
        getdata(result);
        setData(result);
      });
  }, [getdata, path]);
  return (
    <div>
      <h1 className="titulli">Comments</h1>
      <div className="ratings">
        {data.map((element) => {
          return (
            <div className="koment" key={Math.random().toString()}>
              <div className="emri">
                <img
                  className="cellImg"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt=""
                />
                <div className="em">{element.username}</div>

                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={element.stars} readOnly />
                </Box>
              </div>
              <p className="komenti">{element.comment}</p>
              <p className="data">{element.date.substring(0, 10)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Ratings;
