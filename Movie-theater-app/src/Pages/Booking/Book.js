import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Navbar from "../../Components/navbar/NavBar";
import Header from "../ConcessionsPages/Header";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListDivider from "@mui/joy/ListDivider";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Typography from "@mui/joy/Typography";
import "./book.css";

function Book() {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [active, setActive] = useState("seat");
  const [active1, setActive1] = useState("seat");
  const [active2, setActive2] = useState("seat");
  const [active3, setActive3] = useState("seat");
  const [active4, setActive4] = useState("seat");
  const [active5, setActive5] = useState("seat");
  const [active6, setActive6] = useState("seat");
  const [count, setCount] = useState(0);

  const handleseat3 = () => {
    setActive("seat selected");
    setCount(count + 1);
  };
  const handleseat4 = () => {
    setActive("seat");
    setCount(count - 1);
  };
  const hadleSeat = () => {
    active === "seat" ? handleseat3() : handleseat4();
  };
  const handleseat5 = () => {
    setActive1("seat selected");
    setCount(count + 1);
  };
  const handleseat6 = () => {
    setActive1("seat");
    setCount(count - 1);
  };
  const hadleSeat1 = () => {
    active1 === "seat" ? handleseat5() : handleseat6();
  };
  const handleseat7 = () => {
    setActive2("seat selected");
    setCount(count + 1);
  };
  const handleseat8 = () => {
    setActive2("seat");
    setCount(count - 1);
  };
  const hadleSeat2 = () => {
    active2 === "seat" ? handleseat7() : handleseat8();
  };
  const handleseat9 = () => {
    setActive3("seat selected");
    setCount(count + 1);
  };
  const handleseat0 = () => {
    setActive3("seat");
    setCount(count - 1);
  };
  const hadleSeat3 = () => {
    active3 === "seat" ? handleseat9() : handleseat0();
  };
  const handleseat11 = () => {
    setActive4("seat selected");
    setCount(count + 1);
  };
  const handleseat22 = () => {
    setActive4("seat");
    setCount(count - 1);
  };
  const hadleSeat4 = () => {
    active4 === "seat" ? handleseat11() : handleseat22();
  };
  const handleseat33 = () => {
    setActive5("seat selected");
    setCount(count + 1);
  };
  const handleseat44 = () => {
    setActive5("seat");
    setCount(count - 1);
  };
  const hadleSeat5 = () => {
    active5 === "seat" ? handleseat33() : handleseat44();
  };
  const handleseat = () => {
    setActive6("seat selected");
    setCount(count + 1);
  };
  const handleseat2 = () => {
    setActive6("seat");
    setCount(count - 1);
  };
  const hadleSeat6 = () => {
    active6 === "seat" ? handleseat() : handleseat2();
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
    <Navbar>
      <Header />
      <div className="movie1">
        <div className="movie-container">
          <div className="selects" key={Math.random()}>
            <img src={movie.movieimg} alt="" />
            <div>
              <h1>{movie.title}</h1>
              <div className="tickets">
                <label htmlFor="">Tickets</label>
                <select name="Tickets">
                  <option value="default">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="pay">
                <Box sx={{ minWidth: 240 }}>
                  <Box
                    sx={{
                      mb: 2,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      id="example-payment-channel-label"
                      level="body3"
                      textTransform="uppercase"
                      fontWeight="xl"
                      sx={{ letterSpacing: "0.15rem" }}
                    >
                      Pay with
                    </Typography>
                  </Box>
                  <RadioGroup
                    aria-labelledby="example-payment-channel-label"
                    overlay
                    name="example-payment-channel"
                    defaultValue="Paypal"
                  >
                    <List component="div" variant="outlined">
                      {["Credit Card", "Paypal", "QR Code"].map(
                        (value, index) => (
                          <React.Fragment key={value}>
                            {index !== 0 && <ListDivider />}
                            <ListItem>
                              <Radio id={value} value={value} label={value} />
                            </ListItem>
                          </React.Fragment>
                        )
                      )}
                    </List>
                  </RadioGroup>
                </Box>
                <button className="butoni1">NEXT</button>
              </div>
            </div>
          </div>
        </div>
        <div className="movie2">
          <ul className="showcase">
            <li>
              <div className="seat"></div>
              <small>Available</small>
            </li>
            <li>
              <div className="seat selected"></div>
              <small>Selected</small>
            </li>
            <li>
              <div className="seat sold"></div>
              <small>Sold</small>
            </li>
          </ul>
          <div className="container23">
            <div className="screen"></div>

            <div className="row">
              <div onClick={hadleSeat} className={active}></div>
              <div onClick={hadleSeat1} className={active1}></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
            </div>

            <div className="row">
              <div className="seat"></div>
              <div className="seat"></div>
              <div onClick={hadleSeat2} className={active2}></div>
              <div className="seat sold"></div>
              <div className="seat sold"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
            </div>
            <div className="row">
              <div className="seat"></div>
              <div className="seat"></div>
              <div onClick={hadleSeat3} className={active3}></div>
              <div onClick={hadleSeat4} className={active4}></div>
              <div onClick={hadleSeat5} className={active5}></div>
              <div onClick={hadleSeat6} className={active6}></div>
              <div className="seat sold"></div>
              <div className="seat sold"></div>
            </div>
            <div className="row">
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
            </div>
            <div className="row">
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat sold"></div>
              <div className="seat sold"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
            </div>
            <div className="row">
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat sold"></div>
              <div className="seat sold"></div>
              <div className="seat sold"></div>
              <div className="seat"></div>
            </div>
          </div>
          <p className="text">You have selected {count} seat</p>
        </div>
      </div>
    </Navbar>
  );
}

export default Book;
